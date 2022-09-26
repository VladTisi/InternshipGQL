const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class EmployeeAllEmpApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAllEmp() {
    const data = await this.get(`MeniuNavigare/GetNumePrenumeFunctiaDataAngajarii`)

    return data
  }
}
module.exports = EmployeeAllEmpApi
