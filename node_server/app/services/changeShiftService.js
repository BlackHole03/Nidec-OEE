const { CronJob } = require('cron')
const masterShift = require('../models/masterShift')
const getShift = require('../business/getShift')

const changeShiftService = () => {
    let shifts = []
    let currentShift = null
    let jobs = {}

    const getShifts = async () => {
        const allShift = await masterShift().where('IsDelete', '=', 0).get()
        currentShift = await getShift(allShift)
        return allShift
    }

    const start = async () => {
        shifts = await getShifts()
        for(const shift of shifts) {
            const start = shift.Start_Time.split(':')
            const end = shift.End_Time.split(':')
            
            jobs[`${shift.ID}-start`] = new CronJob({
                cronTime: `${start[2]} ${start[1]} ${start[0]} * * *`,
                onTick: function() {
                    currentShift = shift
                    console.log(shift)
                },
                timeZone: 'Asia/Ho_Chi_Minh'
            })

            jobs[`${shift.ID}-end`] = new CronJob({
                cronTime: `${end[2]} ${end[1]} ${end[0]} * * *`,
                onTick: function() {
                    currentShift = null
                    console.log(shift)
                },
                timeZone: 'Asia/Ho_Chi_Minh'
            })

            jobs[`${shift.ID}-start`].start()
            jobs[`${shift.ID}-end`].start()
        }
    }

    const reset = async () => {
        for(const key in jobs) {
            jobs[key].stop()
            delete jobs[key]
        }

        await start()

        return true
    }

    const getCurrentShift = async () => {
        if(!currentShift) {
            currentShift = await getShift()
        }

        return currentShift
    }

    return {
        start,
        reset,
        getCurrentShift
    }
}

module.exports = changeShiftService()