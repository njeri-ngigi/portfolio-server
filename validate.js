const EmailValidator = require('email-validator');

module.exports = {
  validateMail(req, res, next) {
    const { email = '', message = '' } = req.body;
    if (!email || !message) {
      return res.status(400).send({ message: 'email and message fields are required' })
    }
    if (!EmailValidator.validate(email)) {
      return res.status(400).send({ message: 'enter a valid email' })
    }
    return next();
  }
}