const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeTeamBBApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getTeamBB(id) {
    const data = await this.get(`Echipa/GetBB?angajatId=${id}`)

    return data
  }
}
module.exports = EmployeeTeamBBApi
