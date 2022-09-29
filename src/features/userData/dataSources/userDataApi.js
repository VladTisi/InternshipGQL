const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class userDataApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getUser(id) {
    const data = await this.get(`/HomePage/GetDateAngajat?Id=${id}`)
    return data
  }

  async userUpdated(input) {
    const data = await this.post('MeniuModificareDateAngajat/UpdateDate', input, this.option)
    return data
  }
}

module.exports = userDataApi
