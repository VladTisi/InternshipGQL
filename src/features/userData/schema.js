const { gql } = require('apollo-server-koa')

const userData = gql`
  type person {
    id: Int
    nume: String
    prenume: String
    echipa: String
    functie: String
    sex: String
    email: String
    numarTelefon: String
    salariu: Int
    overtime: Int
    dataAngajarii: DateTime
    #Poza: String
  }

  input personUpd {
    id: Int
    nume: String
    prenume: String
    echipa: Ech
    functie: Func
    sex: String
    email: Login
    numarTelefon: String
    salariu: Int
    overtime: Int
    dataAngajarii: DateTime
    #Poza: String
  }
  input Func {
    id: Int!
    nume: String
  }
  input Ech {
    id: Int!
    nume: String
  }
  input Login {
    id: Int!
    email: String
  }
  extend type Query {
    user(id: Int): [person]
  }
  type AsyncResult {
    result: Void
  }
  extend type Mutation {
    userUpdated(input: personUpd!): AsyncResult
  }
`

module.exports = userData
