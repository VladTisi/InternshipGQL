const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class echipeApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getEchipe() {
    const data = await this.get(`MeniuModificareDateAngajat/GetEchipe`)
    return data
  }
}

module.exports = echipeApi
