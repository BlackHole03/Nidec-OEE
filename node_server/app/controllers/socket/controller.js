const machineLoopService = require('../../services/machineLoopService')

module.exports = {
    statusIot({ io, payload }) {
        console.log({ statusIot: JSON.stringify(payload)})
        const { id, status, statusMachine } = payload

        if(Number(status)) {
            machineLoopService.addOrUpdateMachine(id, Number(statusMachine)) // 1: run | 2: stop not error | 3: stop due to error
        } else {
            machineLoopService.deleteMachine(id)
        }
        
        io.emit(`machine-${id}`, {
            iot: status,
            machineStatus: statusMachine
        })
    },

    statusMachine({ io, payload }) {
        console.log({ statusMachine: JSON.stringify(payload) })
        const { run, stop, error, machiId } = payload
        let machineStatus = 0

        if(Number(run)) {
            machineStatus = 1
        } else {
            if(Number(stop)) {
                machineStatus = 2
            } else if(Number(error)) {
                machineStatus = 3
            }
        }

        machineLoopService.addOrUpdateMachine(machiId, machineStatus)
        
        io.emit(`machine-${machiId}`, {
            machineStatus
        })
    },

    callStatus({ io, payload }) {
        console.log({ callStatus: JSON.stringify(payload) })

        for(const { run, stop, error, machiId } of payload) {
            let machineStatus = 0
            
            if(Number(run)) {
                machineStatus = 1
            } else {
                if(Number(stop)) {
                    machineStatus = 2
                } else if(Number(error)) {
                    machineStatus = 3
                }
            }
            
            machineLoopService.addOrUpdateMachine(machiId, machineStatus)

            io.emit(`machine-${machiId}`, {
                machineStatus
            })
        }
    }
}