const teamStrangerResolvers = {
  Query: {
    teamStranger: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.EmployeeTeamStrangerApi.getTeamStranger(id)
      return data
    }
  }
}
module.exports = teamStrangerResolvers
