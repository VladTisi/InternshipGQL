const teamsmenuResolvers = {
  Query: {
    team: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.EmployeeTeamApi.getTeam(id)
      return data
    }
  }
}
module.exports = teamsmenuResolvers
