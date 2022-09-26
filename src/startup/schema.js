const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const { userResolvers, CerereConcediiResolvers } = require('../features/user/resolvers')
const userDefs = require('../features/user/schema')

const teamsmenuResolvers = require('../features/teamsmenu/resolvers')
const teamsmenuDefs = require('../features/teamsmenu/schema')

const teamBBResolvers = require('../features/teamBB/resolvers')
const teamBBDefs = require('../features/teamBB/schema')

const teamStrangerResolvers = require('../features/teamStranger/resolvers')
const teamStrangerDefs = require('../features/teamStranger/schema')

const userDataResolvers = require('../features/userData/resolvers')
const userDataDefs = require('../features/userData/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const concediiPersonaleResolvers = require('../features/concedipersonale/resolvers')
const resolvers = merge(
  userResolvers,
  userDataResolvers,
  teamBBResolvers,
  teamStrangerResolvers,
  CerereConcediiResolvers,
  concediiPersonaleResolvers,
  teamsmenuResolvers
)

const concediiPersonaleDefs = require('../features/concedipersonale/schema')
const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  userDefs,
  teamsmenuDefs,
  teamBBDefs,
  teamStrangerDefs,
  concediiPersonaleDefs,
  userDataDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
