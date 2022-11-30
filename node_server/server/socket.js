const channels = require('../router/channels')
const { io } = require('./io')

const clients = {}

const start = () => {
    io.on('connection', socket => {
        const { address, headers: { origin, 'user-agent': userAgent } } = socket.handshake
        clients[socket.id] = { address, origin, userAgent, id: socket.id }

        socket.on('disconnect', () => {
            if(socket.id in clients) delete clients[socket.id]
        })

        channels(socket, io)
    })
}

const getClients = () => clients

module.exports = { start, getClients }