const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class emailApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getEmail(id) {
    const data = await this.get(`/HomePage/GetEmailFromId?Id=${id}`)
    return data[0]
  }
  async updateEmail(input) {
    try {
      const data = await this.post(`/HomePage/UpdateEmail?email=${input.email}&Id=${input.id}`)
      return data
    } catch {
      return 'baddd bad'
    }
  }
}

module.exports = emailApi
