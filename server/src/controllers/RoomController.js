
const {Room} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const room = await Room.findAll({
        limit: 10
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur est survenue en récupérant les Rooms'
      })
    }
  },
  async post (req, res) {
    try {
      const room = await Room.create(req.body)
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'Nom de Room déja pris'
      })
    }
  }
}
