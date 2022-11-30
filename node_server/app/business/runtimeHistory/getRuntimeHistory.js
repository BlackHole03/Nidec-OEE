const { getStartOfDay } = require('../../configs/app.config')
const runtimeHistory = require('../../models/runtimeHistory')
const moment = require('moment')

const getRuntimeHistory = async (machineId,machinestatus) => {
    const current = moment()
    const startOfDay = getStartOfDay()

    const runtime = runtimeHistory().where('Master_Machine_ID', '=', machineId)

    if(machinestatus) {
        runtime.where('IsRunning', '=', machinestatus)
    }

    if(startOfDay.diff(current, 'minutes', true) > 0) {
        runtime.where('Time_Created', '>=', startOfDay.subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss').toString())
    } else {
        runtime.where('Time_Created', '>=', startOfDay.format('YYYY-MM-DD HH:mm:ss').toString())
    }

    return await runtime.get()
}

module.exports = getRuntimeHistory