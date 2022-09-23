const { gql } = require('apollo-server-koa')

const teamsmenuDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    prenume: String!
    functia: String!
  }

  extend type Query {
    team(id: Int): [Employee]
  }
`
module.exports = teamsmenuDefs
