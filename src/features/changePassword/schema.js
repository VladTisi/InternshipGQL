const { gql } = require('apollo-server-koa')

const changePasswordDefs = gql`
  type Password {
    password: String
    AngajatId: Int
  }
  extend type Query {
    Password(AngajatId: Int): String
  }
  extend type Mutation {
    newPassword(password: String, AngajatId: Int): String
  }
`

module.exports = changePasswordDefs
