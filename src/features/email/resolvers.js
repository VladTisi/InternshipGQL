const emailDataResolvers = {
  Query: {
    email: async (_, { id }, { dataSources }) => {
      const value = await dataSources.emailApi.getEmail(id)
      return value
    }
  },
  Mutation: {
    updateEmail: async (_, { input }, { dataSources }, _info) => {
      return dataSources.emailApi.updateEmail(input)
    }
  }
}
module.exports = emailDataResolvers
