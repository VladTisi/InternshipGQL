const { gql } = require('apollo-server-koa')

const tipConcediuData = gql`
  type tipConcediu {
    id: Int
    nume: String
  }

  extend type Query {
    tipConcediu(id: Int): [tipConcediu]
  }
`

module.exports = tipConcediuData
