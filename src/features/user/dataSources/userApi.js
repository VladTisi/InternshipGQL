const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData(email) {
    const userData = this.get(`LogAuten/GetUser?email=${email}`)
    return userData
  }

  async concediiData() {
    const concediiData = (this.baseURL += 'CerereConcediu/GetTipConcediu')
    return concediiData
  }

  async authenticateUser(userName, password) {
    const userData = this.get(`LogAuten/GetParolaDecriptata?email=${userName}&parola=${password}`)
    return userData
  }
}

module.exports = UserApi
