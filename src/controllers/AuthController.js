const AuthService = require('../services/AuthService')

class AuthController {
  async login (req, res) {
    try {
      const { email, password } = req.body
      const result = await AuthService.login(email, password)
      res.json(result)
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  }
}

module.exports = new AuthController()
