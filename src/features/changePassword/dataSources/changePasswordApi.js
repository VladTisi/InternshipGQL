const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class changePasswordApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getPassword(AngajatId) {
    const data = await this.get(`SchimbareParola/GetPassword?AngajatId=${AngajatId}`)
    return data
  }

  async postChangePassword(UpdatePassword) {
    const data = await this.post(
      `SchimbareParola/UpdatePassword?password=${UpdatePassword.newPassword}&AngajatId=${UpdatePassword.angajatId}`
    )
    return true
  }

  async newPassword(password, AngajatId) {
    try {
      const data = await this.post(`SchimbareParola/UpdatePassword?password=${password}&AngajatId=${AngajatId}`)
      return 'a mers'
    } catch {
      return 'nu a mers'
    }
  }
}

module.exports = changePasswordApi
