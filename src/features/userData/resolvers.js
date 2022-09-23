const userDataResolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      const value = await dataSources.userDataApi.getUser(id)
      return value
    }
  }
}
module.exports = userDataResolvers
