const { gql } = require('apollo-server-koa')

const changePasswordDefs = gql`
  type Password {
    password: String
  }

  input UpdatePassword {
    newPassword: String
    angajatId: Int
  }

  extend type Query {
    Password(id: Int): String
  }

  extend type Mutation {
    changePassword(input: UpdatePassword): Boolean
  }
`

module.exports = changePasswordDefs
