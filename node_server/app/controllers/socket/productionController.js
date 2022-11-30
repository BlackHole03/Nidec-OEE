const commandProductionDetail = require('../../models/commandProductionDetail')
const masterBom               = require('../../models/masterBom')
const masterProduct           = require('../../models/masterProduct')
const masterMold              = require('../../models/masterMold')
const productionLog           = require('../../models/productionLog')
const runtimeHistory          = require('../../models/runtimeHistory')
const oeeDay                  = require('../../models/oeeDay')
const oeeShift                = require('../../models/oeeShift')
const productDefectiveLog     = require('../../models/productDefectiveLog')

const getProductionLog    = require('../../business/productionLog/getProductionLog')
const getOee              = require('../../business/oee/getOee')
const getPlannedTime      = require('../../business/getPlannedTime')
const getRuntimeHistory   = require('../../business/runtimeHistory/getRuntimeHistory')
const caculateOee         = require('../../business/oee/calculateOee')
const createProductionLog = require('../../business/productionLog/createProductionLog')
const checkCondition      = require('../../business/checkCondition')

const { getCurrentShift } = require('../../services/changeShiftService')
const { produceLogger, qcLogger, stopMachineLogger, errorMachineLogger, startPlanLogger, setupMachineLogger } = require('../../providers/logger')

module.exports = {
    async produce({ payload, io }) {
        produceLogger.info(payload)
        
        try {
            const { machineId, stt, id } = payload
            let   checkPlan = false
            const planIsRunning = await commandProductionDetail().where('IsDelete', '=', 0)
                                                                 .where('Part_Action', '=', machineId)
                                                                 .where('Status', '=', 1)
                                                                 .get()
            const quantityPlan = planIsRunning.length
    
            if(quantityPlan) {
                for(const plan of planIsRunning) {
                    if(plan.ID == id) checkPlan = true
                }

                if(checkPlan) {
                    const shift = await getCurrentShift()
                    const paramsDay = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                    const paramsShift = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                    const productionLogs = await getProductionLog(machineId)
                    const runtimes = await getRuntimeHistory(machineId, 1)
    
                    for(const plan of planIsRunning) {
                        io.emit(`plan-${plan.ID}`, {
                            quantity: plan.Quantity_Production,
                            ng: plan.Quantity_Error,
                        })
                        const bom = await masterBom().where('Product_BOM_ID', '=', plan.Product_ID)
                                                     .where('Mold_ID', '=', plan.Mold_ID)
                                                     .first()
        
                        const planProductionLogs = productionLogs.filter(val => val.Command_Production_Detail_ID == plan.ID)
        
                        if(planProductionLogs.length) {
                            const lastProductionLog = planProductionLogs[planProductionLogs.length - 1]
        
                            if(await checkCondition(lastProductionLog, bom)) {
                                const log = await createProductionLog({ quantityPlan ,plan, bom, total: bom.Cavity_Real * Number(stt), note: 'produce 42' })
                                productionLogs.push(log)
                            } else {
                                lastProductionLog.Total = Number(lastProductionLog.Total) + (Number(lastProductionLog.Cavity) * Number(stt))
                                await productionLog().where('ID', '=', lastProductionLog.ID)
                                                     .update({ Total: lastProductionLog.Total})
                            }
                        } else {
                            const log = await createProductionLog({ quantityPlan ,plan, bom, total: bom.Cavity_Real * Number(stt), note: 'produce 51' })
                            productionLogs.push(log)
                        }
        
                    }
                    
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
    
                    paramsDay.plannedTime = await getPlannedTime('day')()
                    paramsShift.plannedTime = await getPlannedTime('shift')()
    
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
                            Note: 'produce insert',
                            ...resultOeeDay
                        })
                    }
    
                    if(_oeeShift) {
                        await oeeShift().where('ID', '=', _oeeShift.ID)
                                        .update(resultOeeShift)
                    } else {
                        await oeeShift().insert({
                            Master_Machine_ID: machineId,
                            Note: 'produce insert',
                            Master_Shift_ID: shift.ID,
                            ...resultOeeShift
                        })
                    }
    
                    io.emit(`machine-${machineId}`, {
                        shift: resultOeeShift,
                        day: resultOeeDay,
                        productionDetail: {
                            shift: { quantity: paramsShift.total, ng: paramsShift.ng },
                            day: { quantity: paramsDay.total, ng: paramsDay.ng },
                        }
                    })
                }
            }
        } catch(error) {
            produceLogger.error(error.stack)
        }
    },

    async qc({ io, payload }) {
        qcLogger.info(JSON.stringify(payload))

        try {
            const { ng: quantity, id: planId } = payload
    
            const plan = await commandProductionDetail().where('IsDelete', '=', 0)
                                                        .where('ID', '=', planId)
                                                        .first()
            
            if(plan) {
                const shift = await getCurrentShift()
                const paramsDay = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                const paramsShift = { total: 0, ng: 0, runtime: 0, netRuntime: 0, plannedTime: 0 }
                const machineId = plan.Part_Action
                const bom = await masterBom().where('Product_BOM_ID', '=', plan.Product_ID)
                                             .where('Mold_ID', '=', plan.Mold_ID)
                                             .first()
    
                const productionLogs = await getProductionLog(machineId)
                const planProductionLogs = productionLogs.filter(val => val.Command_Production_Detail_ID == plan.ID)
                const runtimes = await getRuntimeHistory(machineId, 1)
    
                if(planProductionLogs.length) {
                    const lastProductionLog = planProductionLogs[planProductionLogs.length - 1]
    
                    if(await checkCondition(lastProductionLog, bom)) {
                        const log = await createProductionLog({ plan, bom, total: quantity, ng: quantity, note: 'qc 170'})
                        await productDefectiveLog().insert({
                            Production_Log_ID: log.ID,
                            Master_Shift_ID: shift.ID,
                            Master_Machine_ID: machineId,
                            Quantity: quantity
                        })
                        productionLogs.push(log)
                    } else {
                        lastProductionLog.NG = Number(lastProductionLog.NG) + Number(quantity)
                        await productionLog().where('ID', '=', lastProductionLog.ID)
                                             .update({ NG : lastProductionLog.NG })
                        const productDefective = await productDefectiveLog().where('Master_Machine_ID', '=', machineId)
                                                                            .where('Master_Shift_ID', '=', shift.ID)
                                                                            .where('Production_Log_ID', '=', lastProductionLog.ID)
                                                                            .first()
                        if(productDefective) {
                            await productDefectiveLog().where('ID', '=', productDefective.ID)
                                                       .update({
                                                            Quantity: Number(productDefective.Quantity) + Number(quantity)
                                                       })
                        } else {
                            await productDefectiveLog().insert({
                                Production_Log_ID: lastProductionLog.ID,
                                Master_Shift_ID: shift.ID,
                                Master_Machine_ID: machineId,
                                Quantity: quantity
                            })
                        }
                    }
                } else {
                    const log = await createProductionLog({ plan, bom, total: quantity, ng: quantity, note: 'qc 201'})
                    await productDefectiveLog().insert({
                        Production_Log_ID: log.ID,
                        Master_Shift_ID: shift.ID,
                        Master_Machine_ID: machineId,
                        Quantity: quantity
                    })
                    productionLogs.push(log)
                }
    
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
    
                paramsDay.plannedTime = await getPlannedTime('day')()
                paramsShift.plannedTime = await getPlannedTime('shift')()
    
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
                        Note: 'qc insert',
                        ...resultOeeDay
                    })
                }
                if(_oeeShift) {
                    await oeeShift().where('ID', '=', _oeeShift.ID)
                                    .update(resultOeeShift)
                } else {
                    await oeeShift().insert({
                        Master_Machine_ID: machineId,
                        Note: 'qc insert',
                        Master_Shift_ID: shift.ID,
                        ...resultOeeShift
                    })
                }

                io.emit(`plan-${plan.ID}`, {
                    quantity: plan.Quantity_Production,
                    ng: plan.Quantity_Error,
                })

                io.emit(`machine-${plan.Part_Action}`, {
                    shift: resultOeeShift,
                    day: resultOeeDay,
                    productionDetail: {
                        shift: { quantity: paramsShift.total, ng: paramsShift.ng },
                        day: { quantity: paramsDay.total, ng: paramsDay.ng },
                    }
                })
            }
        } catch(error) {
            qcLogger.error(JSON.stringify(error.stack))
        }
    },

    async stopMachine({ payload }) {
        stopMachineLogger.info(JSON.stringify(payload))

        try {
            const { machiId, 'stop-error': stopError,  'stop-chang-mold': stopChangMold, 'stop-qc': stopQc, 'stop-other': stopOther} = payload
            const history = await getRuntimeHistory(machiId, 2)
    
            if(history.length) {
                const lastHistory = history[history.length - 1]
                if(Number(stopError)) {
                    await runtimeHistory().where('ID', '=', lastHistory.ID)
                                          .update({ Master_Status_ID: 8 }) // stop due to machine
                    return
                }
                if(Number(stopChangMold)) {
                    await runtimeHistory().where('ID', '=', lastHistory.ID)
                                          .update({ Master_Status_ID: 7 }) // stop due to change mode
                    return
                }
                if(Number(stopOther)) {
                    await runtimeHistory().where('ID', '=', lastHistory.ID)
                                          .update({ Master_Status_ID: 9 }) // stop due to other
                    return
                }
                if(Number(stopQc)) {
                    let masterStatusID
                    switch(Number(stopQc)) {
                        case 1:
                            masterStatusID = 10 //Short mold
                            break
                        case 2:
                            masterStatusID = 11 //Burr
                            break
                        case 3:
                            masterStatusID = 12 //Dim
                            break
                        case 4:
                            masterStatusID = 14 //Shape chage
                            break
                        case 5: 
                            masterStatusID = 13 //IBUTSU
                            break
                        case 6:
                            masterStatusID = 15 //Others
                            break
                        default:
                            masterStatusID = 0
                            break
                    }
                    await runtimeHistory().where('ID', '=', lastHistory.ID)
                                          .update({ Master_Status_ID: masterStatusID })
                }
            }
        } catch(error) {
            stopMachineLogger.error(JSON.stringify(error.stack))
        }
    },

    async errorMachine({ payload }) {
        errorMachineLogger.info(JSON.stringify(payload))

        try {
            const { machiId, 'error-machine': errorMachine } = payload
            const history = await getRuntimeHistory(machiId, 3)
    
            if(history.length) {
                const lastHistory = history[history.length - 1]
                let masterStatusID
    
                switch(Number(errorMachine)) {
                    case 1:   
                        masterStatusID = 1 //cushion
                        break
                    case 2:
                        masterStatusID = 2 //runner stuck
                        break
                    case 3:
                        masterStatusID = 3 //double short
                        break
                    case 4:
                        masterStatusID = 4 //accume miss
                        break
                    case 5: 
                        masterStatusID = 5 //material runout
                        break
                    case 6:
                        masterStatusID = 6 //others
                        break
                    default:
                        masterStatusID = 0
                        break
                }
                await runtimeHistory().where('ID', '=', lastHistory.ID)
                                        .update({ Master_Status_ID: masterStatusID })
            }
        } catch(error) {
            errorMachineLogger.error(JSON.stringify(error.stack))
        }
    },

    async startPlan({ payload, io }) {
        startPlanLogger.info(JSON.stringify(payload))

        try {
            const { idPlan, machiId } = payload
            const planIsRunning = await commandProductionDetail().where('IsDelete', '=', 0)
                                                                 .where('Part_Action', '=', machiId)
                                                                 .where('Status', '=', 1)
                                                                 .get()
            
            if(planIsRunning.length) {
                for(const plan of planIsRunning) {
                    const mold = masterMold().where('ID', '=', plan.Mold_ID)
                                             .first()
                    const product = masterProduct().where('ID', '=', plan.Product_ID)
                                                   .first()
                    const bom = masterBom().where('Product_BOM_ID', '=', plan.Product_ID)
                                           .where('Mold_ID', '=', plan.Mold_ID)
                                           .first()
    
                    plan.master_product = await product
                    plan.master_bom = await bom
                    plan.master_mold = await mold
                }
                
                io.emit(`machine-${machiId}`, {
                    plan: planIsRunning
                })
            }
        } catch(error) {
            startPlanLogger.error(JSON.stringify(error.stack))
        }
    },
    
    async setupMachine({ payload }) {
        setupMachineLogger.info(payload)
    }
}