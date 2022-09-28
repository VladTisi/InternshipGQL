const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class GestionareConcediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async getConcedii(id) {
    const data = this.get(`GestionareConcedii/GetConcedii?angajatId=${id}`)
    return data
  }
}

module.exports = GestionareConcediiApi
