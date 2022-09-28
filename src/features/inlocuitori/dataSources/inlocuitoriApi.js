const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class inlocuitoriApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getInlocuitori(id) {
    const data = await this.get(`HomePage/GetMembriEchipa?angajatId=${id}`)
    return data
  }
}

module.exports = inlocuitoriApi
