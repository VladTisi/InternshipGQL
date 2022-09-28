const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class tipConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async gettipConcediu() {
    const data = await this.get(`/CerereConcediu/GetTipConcediu`)
    return data
  }
}

module.exports = tipConcediuApi
