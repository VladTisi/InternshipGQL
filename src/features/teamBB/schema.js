const { gql } = require('apollo-server-koa')

const teamBBDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    prenume: String!
    functia: String!
  }

  extend type Query {
    teamBB(id: Int): [Employee]
  }
`
module.exports = teamBBDefs
