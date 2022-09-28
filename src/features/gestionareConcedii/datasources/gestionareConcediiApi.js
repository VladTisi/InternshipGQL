const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class GestionareConcediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async getConcedii(id) {
    const data = await this.get(`GestionareConcedii/GetConcedii?angajatId=${id}`)
    return data
  }
  async refuzaConcediu(id) {
    const data = await this.put(`GestionareConcedii/RefuzaConcediu?concediuId=${id}`)
    return data
  }
  async aprobaConcediu(id) {
    const data = await this.put(`GestionareConcedii/AprobaConcediu?concediuId=${id}`)
    return data
  }
}

module.exports = GestionareConcediiApi
