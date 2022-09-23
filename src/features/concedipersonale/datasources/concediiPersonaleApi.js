const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediiPersonaleApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async getAprobate(id) {
    const data = this.get(`ConcediiPersonale/ApprovedHolidays?Id=${id}`)
    return data
  }
  async getRefuzate(id) {
    const data = this.get(`ConcediiPersonale/DisapprovedHolidays?Id=${id}`)
    return data
  }
  async getAsteptare(id) {
    const data = this.get(`ConcediiPersonale/PendingHolidays?Id=${id}`)
    return data
  }
}

module.exports = ConcediiPersonaleApi
