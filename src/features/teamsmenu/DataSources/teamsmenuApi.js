const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeTeamApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getTeam(id) {
    console.log('1')
    const data = await this.get(`Echipa/GetEchipa?angajatId=${id}`)
    console.log('2')
    return data
  }
}
module.exports = EmployeeTeamApi
