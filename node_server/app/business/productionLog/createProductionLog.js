const productionLog = require('../../models/productionLog')
const { getCurrentShift } = require('../../services/changeShiftService')

const createProductionLog = async ({ quantityPlan, plan, bom, total, ng, note }) => {
    const shift = await getCurrentShift()

    const log = {
        Command_Production_Detail_ID: plan.ID,
        Master_Shift_ID: shift.ID,
        Master_Machine_ID: plan.Part_Action,
        Total: total || 0,
        NG: ng || 0,
        Runtime: 0,
        Stoptime: 0,
        Quantity_Plan: quantityPlan,
        Cavity: bom.Cavity_Real,
        Cycletime: bom.Cycle_Time,
        Note: note
    }
    
    const productionLogId = await productionLog().insert(log)

    log.ID = productionLogId

    return log
}

module.exports = createProductionLog