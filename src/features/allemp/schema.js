const { gql } = require('apollo-server-koa')

const allempDefs = gql`
  type Employee {
    id: Int!
    nume: String!
    poza: String
    prenume: String!
    functia: String!
  }

  extend type Query {
    allemp(id: Int): [Employee]
  }
`
module.exports = allempDefs
