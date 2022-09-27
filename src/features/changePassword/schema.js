const { gql } = require('apollo-server-koa')

const changePasswordDefs = gql`
  type Password {
    password: String
    AngajatId: Int
  }

  input UpdatePassword {
    newPassword: String
    angajatId: Int
  }

  extend type Query {
    Password(AngajatId: Int): String
  }
  extend type Mutation {
    newPassword(password: String, AngajatId: Int): String
  }

  extend type Mutation {
    changePassword(input: UpdatePassword): Boolean
  }
`

module.exports = changePasswordDefs
