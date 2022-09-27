const { DataSource } = require('apollo-datasource')

const changePasswordResolvers = {
  Query: {
    Password: async (_, { id }, { dataSources }) => {
      const passwordData = await dataSources.changePasswordApi.getPassword(id)
      return passwordData
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
