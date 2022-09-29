const { topics, pubSub } = require('../../pubSub')

const CerereConcediiResolvers = {
  Mutation: {
    insertCerereConcediu: async (_, { input }, { dataSources }, _info) => {
      const data = await dataSources.concediuApi.insertCerereConcediu(input)
      return data
    }
  },
  Query: {
    ZileRamaseOdihna: async (_, { AngajatId }, { dataSources }) => {
      const data = await dataSources.concediuApi.ZileRamaseOdihna(AngajatId)
      return data
    },
    ZileRamaseDeces: async (_, { AngajatId }, { dataSources }) => {
      const data = await dataSources.concediuApi.ZileRamaseDeces(AngajatId)
      return data
    },
    ZileRamaseMedical: async (_, { AngajatId }, { dataSources }) => {
      const data = await dataSources.concediuApi.ZileRamaseMedical(AngajatId)
      return data
    },
    ZileRamaseNeplatite: async (_, { AngajatId }, { dataSources }) => {
      const data = await dataSources.concediuApi.ZileRamaseNeplatite(AngajatId)
      return data
    }
  }
}

module.exports = CerereConcediiResolvers
