const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeTeamStrangerApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getTeamStranger(id) {
    const data = await this.get(`Echipa/GetStranger?angajatId=${id}`)

    return data
  }
}
module.exports = EmployeeTeamStrangerApi
