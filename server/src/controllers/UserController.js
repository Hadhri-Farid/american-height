const {User} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const users = await User.findOne({
        limit: 1
      })
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur est survenue en récupérant User'
      })
    }
  }
}