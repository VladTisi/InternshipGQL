const { topics, pubSub } = require('../../pubSub')

const CerereConcediiResolvers = {
  Mutation: {
    insertCerereConcediu: async (_, { input }, { dataSources }, _info) => {
      const data = await dataSources.concediuApi.insertCerereConcediu(input)
      return data
    }
  }
}

module.exports = CerereConcediiResolvers
