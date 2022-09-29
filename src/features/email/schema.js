const { gql } = require('apollo-server-koa')

const emailData = gql`
  type Email {
    id: Int
    email: String
  }

  input emailUpd {
    id: Int
    email: String
  }

  extend type Query {
    email(id: Int): Email
  }
  type AsyncResult {
    result: Void
  }
  extend type Mutation {
    updateEmail(input: emailUpd!): AsyncResult
  }
`

module.exports = emailData
