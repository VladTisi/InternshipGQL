const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class functiiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getFunctii() {
    const data = await this.get(`MeniuModificareDateAngajat/GetFunctii`)
    return data
  }
}

module.exports = functiiApi
