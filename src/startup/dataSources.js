const ConcediiPersonaleApi = require('../features/concedipersonale/datasources/concediiPersonaleApi')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  concediiPersonaleApi: new ConcediiPersonaleApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.concediiPersonaleApi.initialize({ context })
  return dataSources
}
