const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData() {
    const userData = ''
    return userData
  }

  async concediiData() {
    const concediiData = (this.baseURL += 'CerereConcediu/GetTipConcediu')
    return concediiData
  }

  async authenticateUser(userName, password) {
    if (userName !== 'Administrator' || password !== 'a') return false
    else return true
  }
}

module.exports = UserApi
