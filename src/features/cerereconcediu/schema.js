const { gql } = require('apollo-server-koa')
const cerereConcediuDefs = gql`
  input CerereConcediu {
    tipConcediuId: Int
    data_inceput: DateTime
    data_sfarsit: DateTime
    inlocuitorId: Int
    stareConcediuId: Int
    angajatId: Int
    comentarii: String
  }

  extend type Query {
    ZileRamaseOdihna(AngajatId: Int): Int
    ZileRamaseDeces(AngajatId: Int): Int
    ZileRamaseMedical(AngajatId: Int): Int
    ZileRamaseNeplatite(AngajatId: Int): Int
  }

  extend type Mutation {
    insertCerereConcediu(input: CerereConcediu!): Boolean
  }
`

module.exports = cerereConcediuDefs
