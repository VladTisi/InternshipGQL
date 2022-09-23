const concediiPersonaleResolvers = {
  Query: {
    aprobate: async (_, { id }, { dataSources }) => {
      const value = await dataSources.concediiPersonaleApi.getAprobate(id)
      return value
    },
    refuzate: async (_, { id }, { dataSources }) => {
      const value = await dataSources.concediiPersonaleApi.getRefuzate(id)
      return value
    },
    asteptare: async (_, { id }, { dataSources }) => {
      const value = await dataSources.concediiPersonaleApi.getAsteptare(id)
      return value
    }
  }
}

module.exports = concediiPersonaleResolvers
