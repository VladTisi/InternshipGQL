const { gql } = require('apollo-server-koa')

const userData = gql`
  type person {
    id: Int!
    nume: String
    prenume: String
    echipa: String
    functie: String
    sex: String
    email: String
    nrtelf: String
    salariu: Int
    overtime: String
    dataAngajare: DateTime
    poza: String
  }
  extend type Query {
    user(id: Int): person
  }
`

module.exports = userData
