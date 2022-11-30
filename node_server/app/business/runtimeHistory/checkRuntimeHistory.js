const { getStartOfDay } = require('../../configs/app.config')
const moment = require('moment')

const checkRuntimeHistory = (lastRecord, machineStatus, shift) => {
    const startOfDay = getStartOfDay()
    const { IsRunning, Master_Shift_ID, Time_Updated } = lastRecord
    
    if(IsRunning != machineStatus) return true
    
    if(Master_Shift_ID != shift.ID) return true

    if(startOfDay.diff(moment(Time_Updated), 'hours', true) > 0 && startOfDay.diff(moment(), 'hours', true) <= 0) return true

    if(moment(Time_Updated).format('DD').toString() !== moment().format('DD').toString()) return true
}

module.exports = checkRuntimeHistory