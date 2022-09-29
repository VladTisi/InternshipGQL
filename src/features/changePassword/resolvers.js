const { DataSource } = require('apollo-datasource')

const changePasswordResolvers = {
  Query: {
    password: async (_, { input }, { dataSources }) => {
      const data = await dataSources.changePasswordApi.getPassword(input)
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
