const { io: _io } = require('socket.io-client')
const machineLoopService = require('../services/machineLoopService')
// Call Server IOT
const host = process.env.SERVER_IOT_HOST || '127.0.0.1';
const port = process.env.SERVER_IOT_PORT || 3000;

const socket = _io(`http://${host}:${port}`)

socket.on('connect', () => {
    console.log(`connected ${host}:${port}`);
    socket.emit('call-status-machine')
})

socket.on('disconnect', () => {
    machineLoopService.deleteAll()
})