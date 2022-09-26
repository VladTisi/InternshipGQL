const userDataResolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      const value = await dataSources.userDataApi.getUser(id)
      return value
    }
  },
  Mutation: {
    userUpdated: async (_, { input }, { dataSources }, _info) => {
      return dataSources.userDataApi.userUpdated(input)
    }
  }
}
module.exports = userDataResolvers
