const { gql } = require('apollo-server-koa')

const inlocuitoriData = gql`
  type inlocuitori {
    id: Int
    nume: String
  }

  extend type Query {
    inlocuitori(id: Int): [inlocuitori]
  }
`

module.exports = inlocuitoriData
