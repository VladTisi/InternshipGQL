const { gql } = require('apollo-server-koa')

const teamStrangerDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    prenume: String!
    poza: String
    functia: String!
  }

  extend type Query {
    teamStranger(id: Int): [Employee]
  }
`
module.exports = teamStrangerDefs
