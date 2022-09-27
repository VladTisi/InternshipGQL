const { gql } = require('apollo-server-koa')

const userDefs = gql`
  type UserInfo {
    password: String!
  }

  type TipConcedii {
    id: Int!
    nume: String!
  }

  extend type Query {
    userData(email: String!): String
    concediiData: TipConcedii!
  }

  extend type Mutation {
    authenticateUser(userName: String!, password: String!): Boolean!
  }
  # Not working! Only for demonstration
  extend type Subscription {
    userChanged: String
  }
`

module.exports = userDefs
