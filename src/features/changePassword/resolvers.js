const { DataSource } = require('apollo-datasource')

const changePasswordResolvers = {
  Query: {
    Password: async (_, { AngajatId }, { dataSources }) => {
      const data = await dataSources.changePasswordApi.getPassword(AngajatId)
      return data
    }
  },
  Mutation: {
    changePassword: async (_, { input }, { dataSources }, _info) => {
      const data = await dataSources.changePasswordApi.postChangePassword(input)
      return data
    }
  }
}
module.exports = changePasswordResolvers
