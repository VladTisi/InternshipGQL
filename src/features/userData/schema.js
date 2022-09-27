const { gql } = require('apollo-server-koa')

const userData = gql`
  type person {
    id: Int
    nume: String
    prenume: String
    idEchipa: Int
    idFunctie: Int
    sex: String
    email: String
    numarTelefon: String
    salariu: Int
    overtime: Int
    dataAngajarii: DateTime
    #Poza: String
  }

  type echipe {
    id: Int
    nume: String
  }

  input personUpd {
    id: Int
    nume: String
    prenume: String
    idEchipa: Int
    idFunctie: Int
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
