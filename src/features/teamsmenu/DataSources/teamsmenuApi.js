const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeTeamApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getTeam(id) {
    const data = await this.get(`Echipa/GetEchipa?angajatId=${id}`)

    return data
  }
}
module.exports = EmployeeTeamApi
