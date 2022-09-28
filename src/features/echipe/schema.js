const { gql } = require('apollo-server-koa')

const Echipe = gql`
  type Echipe {
    id: Int
    name: String
  }

  extend type Query {
    Echipe: [Echipe]
  }
`

module.exports = Echipe
