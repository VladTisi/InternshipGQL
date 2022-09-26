const { gql } = require('apollo-server-koa')

const changePasswordDefs = gql`
  type Password {
    password: String
  }
  extend type Query {
    Password(id: Int): String
  }
`

module.exports = changePasswordDefs
