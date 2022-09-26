const teamBBResolvers = {
  Query: {
    teamBB: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.EmployeeTeamBBApi.getTeamBB(id)
      return data
    }
  }
}
module.exports = teamBBResolvers
