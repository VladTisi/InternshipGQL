const tipConcediuDataResolvers = {
  Query: {
    tipConcediu: async (_, __, { dataSources }) => {
      const value = await dataSources.tipConcediuApi.gettipConcediu()
      return value
    }
  }
}
module.exports = tipConcediuDataResolvers
