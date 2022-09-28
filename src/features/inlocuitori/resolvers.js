const inlocuitoriDataResolvers = {
  Query: {
    inlocuitori: async (_, { id }, { dataSources }) => {
      const value = await dataSources.inlocuitoriApi.getInlocuitori(id)
      return value
    }
  }
}
module.exports = inlocuitoriDataResolvers
