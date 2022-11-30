const commandProductionDetail = require('../../models/commandProductionDetail')
const oeeDay                  = require('../../models/oeeDay')
const oeeShift                = require('../../models/oeeShift')
const runtimeHistory          = require('../../models/runtimeHistory')

const getOee               = require('../../business/oee/getOee')
const getPlannedTime       = require('../../business/getPlannedTime')
const getProductionLog     = require('../../business/productionLog/getProductionLog')
const caculateOee          = require('../../business/oee/calculateOee')
const createRuntimeHistory = require('../../business/runtimeHistory/createRuntimeHistory')
const getRuntimeHistory    = require('../../business/runtimeHistory/getRuntimeHistory')
const checkRuntimeHistory  = require('../../business/runtimeHistory/checkRuntimeHistory')
const calculateTPA         = require('../../business/calculateTPA')

const { getCurrentShift } = require('../../services/changeShiftService')
const moment = require('moment')
const { io } = require('../../../server/io')
const { timelineLogger }   = require('../../providers/logger')

module.exports = {
    async runtime({machineId, machineStatus}) {
        try {
            const emitData = { machineStatus }
            const current = moment()
            const shift = await getCurrentShift()
            const planIsRunning = await commandProductionDetail().where('IsDelete', '=', 0)
                                                                 .where('Part_Action', '=', machineId)
                                                                 .where('Status', '=', 1)
                                                                 .get()
                                                                 
            const runtimeHistories = await getRuntimeHistory(machineId)

            if(runtimeHistories.length) {
                const lastRecord = runtimeHistories[runtimeHistories.length - 1]
                
                if(checkRuntimeHistory(lastRecord, machineStatus, shift)) {
                    const runtime = await createRuntimeHistory(shift, machineId, machineStatus)
                    emitData.timeline = {
                        isCreated: true,
                        data: runtime
                    }
                } else {
                    const duration = current.diff(moment(lastRecord.Time_Created), 'seconds') / 60
                    lastRecord.Duration = duration
                    await runtimeHistory().where('ID', '=', lastRecord.ID)
                                            .update({
                                                Duration: current.diff(moment(lastRecord.Time_Created), 'seconds') / 60,
                                                Time_Updated: current.format('YYYY-MM-DD HH:mm:ss').toString()
                                            })
                    emitData.timeline = {
                        isCreated: false,
                        data: {
                            Time_Created: lastRecord.Time_Created,
                            Time_Updated: current.format('YYYY-MM-DD HH:mm:ss').toString(),
                            IsRunning: machineStatus,
                        }
                    }
                }
            } else {
                const runtime = await createRuntimeHistory(shift, machineId, machineStatus)
                emitData.timeline = {
                    isCreated: true,
                    data: runtime
                }
            }

            if(planIsRunning.length) {
                emitData.production = await calculateTPA(planIsRunning) 
                const paramsDay = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                const paramsShift = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                const productionLogs = await getProductionLog(machineId)
                const runtimes = runtimeHistories.filter(runtime => runtime.IsRunning == 1)

                for(const productionLog of productionLogs) {
                    paramsDay.total += Number(productionLog.Total)
                    paramsDay.ng += Number(productionLog.NG)
                    paramsDay.netRuntime += (Number(productionLog.Total) / Number(productionLog.Cavity) * (Number(productionLog.Cycletime) / 60)) / productionLog.Quantity_Plan
                    if(productionLog.Master_Shift_ID == shift.ID) {
                        paramsShift.total += Number(productionLog.Total)
                        paramsShift.ng += Number(productionLog.NG)
                        paramsShift.netRuntime += (Number(productionLog.Total) / Number(productionLog.Cavity) * (Number(productionLog.Cycletime) / 60)) / productionLog.Quantity_Plan
                    }
                }

                if(runtimes.length) {
                    for(const runtime of runtimes) {
                        paramsDay.runtime += Number(runtime.Duration)
                        if(runtime.Master_Shift_ID == shift.ID) {
                            paramsShift.runtime += Number(runtime.Duration)
                        }
                    }
                }

                paramsDay.plannedTime = await getPlannedTime('day')(current)
                paramsShift.plannedTime = await getPlannedTime('shift')(current)

                const resultOeeDay = caculateOee.call(paramsDay)
                const resultOeeShift = caculateOee.call(paramsShift)

                const _oeeDay = await getOee('day', machineId)
                const _oeeShift = await getOee('shift', machineId)

                if(_oeeDay) {
                    await oeeDay().where('ID', '=', _oeeDay.ID)
                                .update(resultOeeDay)
                } else {
                    await oeeDay().insert({
                        Master_Machine_ID: machineId,
                        Note: 'runtime insert',
                        ...resultOeeDay
                    })
                }
                if(_oeeShift) {
                    await oeeShift().where('ID', '=', _oeeShift.ID)
                                    .update(resultOeeShift)
                } else {
                    await oeeShift().insert({
                        Master_Machine_ID: machineId,
                        Note: 'runtime insert',
                        Master_Shift_ID: shift.ID,
                        ...resultOeeShift
                    })
                }

                emitData.shift = resultOeeShift
                emitData.day = resultOeeDay
            }
            
            io.emit(`machine-${machineId}`, emitData)
        } catch(err) {
            timelineLogger.error(JSON.stringify(error))
        }
    }
}