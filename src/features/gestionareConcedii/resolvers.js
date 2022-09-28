const gestionareConcediiResolvers = {
  Query: {
    concedii: async (_, { id }, { dataSources }) => {
      const value = await dataSources.gestionareConcediiApi.getConcedii(id)
      return value
    }
  },
  Mutation: {
    refuzaconcediu: async (_, { id }, { dataSources }) => {
      const value = await dataSources.gestionareConcediiApi.refuzaConcediu(id)
      return value
    },
    aprobaconcediu: async (_, { id }, { dataSources }) => {
      const value = await dataSources.gestionareConcediiApi.aprobaConcediu(id)
      return value
    }
  }
}

module.exports = gestionareConcediiResolvers
