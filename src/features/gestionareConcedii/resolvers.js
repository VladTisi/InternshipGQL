const gestionareConcediiResolvers = {
  Query: {
    concedii: async (_, { id }, { dataSources }) => {
      const value = await dataSources.gestionareConcediiApi.getConcedii(id)
      return value
    }
  }
}

module.exports = gestionareConcediiResolvers
