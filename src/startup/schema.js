const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userDefs = require('../features/user/schema')

const gestionareConcediiResolvers = require('../features/gestionareConcedii/resolvers')
const gestionareConcediiDefs = require('../features/gestionareConcedii/schema')

const teamsmenuResolvers = require('../features/teamsmenu/resolvers')
const teamsmenuDefs = require('../features/teamsmenu/schema')

const CerereConcediiResolvers = require('../features/cerereconcediu/resolvers')
const cerereConcediuDefs = require('../features/cerereconcediu/schema')

const teamBBResolvers = require('../features/teamBB/resolvers')
const teamBBDefs = require('../features/teamBB/schema')

const allempResolvers = require('../features/allemp/resolvers')
const allempDefs = require('../features/allemp/schema')

const teamStrangerResolvers = require('../features/teamStranger/resolvers')
const teamStrangerDefs = require('../features/teamStranger/schema')

const userDataResolvers = require('../features/userData/resolvers')
const userDataDefs = require('../features/userData/schema')

const changePasswordResolvers = require('../features/changePassword/resolvers')
const changePasswordDefs = require('../features/changePassword/schema')

const echipeResolvers = require('../features/echipe/resolvers')
const echipeDefs = require('../features/echipe/schema')

const emailDataResolvers = require('../features/email/resolvers')
const emailDefs = require('../features/email/schema')

const inlocuitoriDataResolvers = require('../features/inlocuitori/resolvers')
const inlocuitoriDefs = require('../features/inlocuitori/schema')

const tipConcediuDataResolvers = require('../features/tipConcediu/resolvers')
const tipConcediuDefs = require('../features/tipConcediu/schema')

const functiiResolvers = require('../features/functii/resolvers')
const functiiDefs = require('../features/functii/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const concediiPersonaleResolvers = require('../features/concedipersonale/resolvers')
const resolvers = merge(
  userResolvers,
  userDataResolvers,
  CerereConcediiResolvers,
  teamBBResolvers,
  allempResolvers,
  teamStrangerResolvers,
  concediiPersonaleResolvers,
  gestionareConcediiResolvers,
  teamsmenuResolvers,
  changePasswordResolvers,
  echipeResolvers,
  emailDataResolvers,
  inlocuitoriDataResolvers,
  tipConcediuDataResolvers,
  functiiResolvers
)

const concediiPersonaleDefs = require('../features/concedipersonale/schema')
const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  userDefs,
  teamsmenuDefs,
  cerereConcediuDefs,
  teamBBDefs,
  allempDefs,
  teamStrangerDefs,
  concediiPersonaleDefs,
  gestionareConcediiDefs,
  userDataDefs,
  changePasswordDefs,
  echipeDefs,
  emailDefs,
  inlocuitoriDefs,
  tipConcediuDefs,
  functiiDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
