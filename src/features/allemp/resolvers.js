const allempResolvers = {
  Query: {
    allemp: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.EmployeeAllEmpApi.getAllEmp()
      return data
    }
  }
}
module.exports = allempResolvers
