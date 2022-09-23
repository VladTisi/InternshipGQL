const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const { userResolvers, CerereConcediiResolvers } = require('../features/user/resolvers')
const userDefs = require('../features/user/schema')

const teamsmenuResolvers = require('../features/teamsmenu/resolvers')
const teamsmenuDefs = require('../features/teamsmenu/schema')

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
  concediiPersonaleDefs,
  userDataDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
