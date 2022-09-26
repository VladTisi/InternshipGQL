const { DataSource } = require('apollo-datasource')

const changePasswordResolvers = {
  Query: {
    Password: async (_, { id }, { dataSources }) => {
      const passwordData = await dataSources.changePasswordApi.getPassword(id)
      return passwordData
    }
  }
}
module.exports = changePasswordResolvers
