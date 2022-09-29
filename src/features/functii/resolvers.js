const functiiResolvers = {
  Query: {
    Functii: async (_, __, { dataSources }) => {
      const value = await dataSources.functiiApi.getFunctii()
      return value
    }
  }
}
module.exports = functiiResolvers
