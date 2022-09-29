const { gql } = require('apollo-server-koa')

const Functii = gql`
  type Functii {
    id: Int
    nume: String
  }

  extend type Query {
    Functii: [Functii]
  }
`

module.exports = Functii
