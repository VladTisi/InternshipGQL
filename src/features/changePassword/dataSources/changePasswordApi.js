const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class changePasswordApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getPassword(id) {
    const data = await this.get(`SchimbareParola/GetPassword?AngajatId=${id}`)
    return data
  }

  async postChangePassword(UpdatePassword) {
    const data = await this.post(
      `SchimbareParola/UpdatePassword?password=${UpdatePassword.newPassword}&AngajatId=${UpdatePassword.angajatId}`
    )
    return true
  }
}

module.exports = changePasswordApi
