const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      profileimage: Joi.string(),
      coins: Joi.number().integer().min(0),
      username: Joi.string().alphanum().min(3).max(15).required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Adresse mail non-valide'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Le mot de passe doit etre défini comme suit:
              <br>
              1. Contenir des caractères alphanumériques uniquement.
              <br>
              2. Faire entre 8 et 32 caractères.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Identifiants non valides'
          })
      }
    } else {
      next()
    }
  }
}
