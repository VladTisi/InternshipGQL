const { gql } = require('apollo-server-koa')

const emailData = gql`
  type email {
    id: Int
    email: String
  }

  input emailUpd {
    id: Int
    email: String
  }

  extend type Query {
    email(id: Int): [email]
  }
  type AsyncResult {
    result: Void
  }
  extend type Mutation {
    updateEmail(input: emailUpd!): AsyncResult
  }
`

module.exports = emailData
