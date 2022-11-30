const { getClients } = require('../../../server/socket')

module.exports = {
    index(req, res) {
        res.json(getClients())
    } 
}