const moment = require('moment')
const masterBom = require('../models/masterBom')

const calculateTPA = async (planIsRunning) => {
    let t = 0,
        p = 0,
        a = 0
    
    for(const plan of planIsRunning) {
        const current = moment()
        const timeStart = moment(plan.Time_Real_Start)
        const bom = await masterBom().where('Product_BOM_ID', '=', plan.Product_ID)
                                     .where('Mold_ID', '=', plan.Mold_ID)
                                     .first()
        t += Number(plan.Quantity)
        a += Number(plan.Quantity_Production)
        p += Math.floor((current.diff(timeStart, 'seconds', true) / bom.Cycle_Time) * bom.Cavity)
    }


    return { t, p, a }

}

module.exports = calculateTPA