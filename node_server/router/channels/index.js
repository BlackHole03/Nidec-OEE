const controller = require('../../app/controllers/socket/controller')
const productionController = require('../../app/controllers/socket/productionController')
const { push } = require('../../app/providers/queue')

module.exports = (socket, io) => {
    socket.on('connect-machine', payload => controller.statusIot({ io, payload }))
    socket.on('status-machine', payload => controller.statusMachine({ io, payload }))
    socket.on('call-status-machine', payload => controller.callStatus({ io, payload }))
    socket.on('error-machine', payload => productionController.errorMachine({ io, payload }))
    socket.on('stop-machine', payload => productionController.stopMachine({ io, payload }))
    socket.on('start-plan', payload => productionController.startPlan({ io, payload }))
    socket.on('setup-machine', payload => productionController.setupMachine({ io, payload }))
    // socket.on('send-iot', payload => productionController.produce({ io, payload }))
    socket.on('send-iot', payload => push(payload.machineId, payload))
    socket.on('plastic', payload => productionController.qc({ io, payload }))
}