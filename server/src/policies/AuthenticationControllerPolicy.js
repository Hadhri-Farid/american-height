const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Veuillez renseigner un email valide.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Votre mot de passe doit remplir les conditions suivantes:
            <br>
            1. Contenir uniquement des caractères alphanumériques.
            <br>
            2. Faire entre 8 et 32 caractères.`
          })
          break
        default:
          res.status(400).send({
            error: 'Il y a eu une erreur, veuillez réessayer.'
          })
      }
    } else {
      next()
    }
  }
}
