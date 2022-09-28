const echipeResolvers = {
  Query: {
    Echipe: async (_, __, { dataSources }) => {
      const value = await dataSources.echipeApi.getEchipe()
      return value
    }
  }
}
module.exports = echipeResolvers
