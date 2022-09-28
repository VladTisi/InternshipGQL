const { gql } = require('apollo-server-koa')

const userDefs = gql`
  type UserInfo {
    id: Int
    esteAdmin: Boolean
    idFunctie: Int
    idEchipa: Int
    managerId: Int
  }

  type TipConcedii {
    id: Int!
    nume: String!
  }

  extend type Query {
    userData(email: String!): UserInfo
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
