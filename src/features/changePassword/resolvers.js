const { DataSource } = require('apollo-datasource')

const changePasswordResolvers = {
  Query: {
    Password: async (_, { AngajatId }, { dataSources }) => {
      const passwordData = await dataSources.changePasswordApi.getPassword(AngajatId)
      return passwordData
    }
  },
  Mutation: {
    newPassword: async (_, { password, AngajatId }, { dataSources }, _info) => {
      const data = await dataSources.changePasswordApi.newPassword(password, AngajatId)
      return data
    }
  }
}
module.exports = changePasswordResolvers
