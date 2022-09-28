const { gql } = require('apollo-server-koa')

const gestionareConcediiDefs = gql`
  type Concedius {
    id: Int
    nume: String
    prenume: String
    functie: String
    status: String
    dataInceput: DateTime
    dataSfarsit: DateTime
    inlocuitor: String
  }
  extend type Query {
    concedii(id: Int): [Concedius]
  }
`

module.exports = gestionareConcediiDefs
