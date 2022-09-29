const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class changePasswordApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getPassword(GetPassword) {
    const data = await this.get(
      `SchimbareParola/GetPasswordBun?AngajatId=${GetPassword.angajatId}&parola=${GetPassword.oldPassword}`
    )
    return data
  }

  async postChangePassword(UpdatePassword) {
    const data = await this.post(
      `SchimbareParola/UpdatePasswordBun?password=${UpdatePassword.newPassword}&AngajatId=${UpdatePassword.angajatId}`
    )
    return true
  }
}

module.exports = changePasswordApi
