const { gql } = require('apollo-server-koa')

const concediiPersonaleDefs = gql`
  type Concediu {
    idAngajatFromAngajat: Int
    dataInceput: DateTime
    dataSfarsit: DateTime
    stareConcediuId: Int
  }
  extend type Query {
    aprobate(id: Int): [Concediu]
  }
  extend type Query {
    refuzate(id: Int): [Concediu]
  }
  extend type Query {
    asteptare(id: Int): [Concediu]
  }
  extend type Query {
    all(id: Int): [Concediu]
  }
`

module.exports = concediiPersonaleDefs
