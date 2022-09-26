const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class changePasswordApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getPassword(id) {
    const data = await this.get(`SchimbareParola/GetPassword?AngajatId=${id}`)
    return data
  }
}

module.exports = changePasswordApi
