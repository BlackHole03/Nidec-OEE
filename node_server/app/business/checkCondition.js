const { getCurrentShift } = require('../services/changeShiftService')
const { getStartOfDay } = require('../configs/app.config')
const moment = require('moment')

const checkCondition = async (productionLog, bom) => {
    const startOfDay = getStartOfDay()
    const shift = await getCurrentShift()
    const { Master_Shift_ID, Cavity, Time_Updated } = productionLog

    if(Master_Shift_ID !== shift.ID) return true

    if(Cavity !== bom.Cavity_Real) return true

    if(startOfDay.diff(moment(Time_Updated), 'hours', true) > 0 && startOfDay.diff(moment(), 'hours', true) <= 0) return true

    if(moment(Time_Updated).format('DD').toString() !== moment().format('DD').toString()) return true

    return false
}

module.exports = checkCondition