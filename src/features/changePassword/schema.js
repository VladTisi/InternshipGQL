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
  input GetPassword {
    oldPassword: String
    angajatId: Int
  }

  extend type Query {
    password(input: GetPassword): Boolean
  }

  extend type Mutation {
    changePassword(input: UpdatePassword): Boolean
  }
`

module.exports = changePasswordDefs
