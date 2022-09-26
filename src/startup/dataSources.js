const ConcediiPersonaleApi = require('../features/concedipersonale/datasources/concediiPersonaleApi')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const EmployeeTeamApi = require('../features/teamsmenu/DataSources/teamsmenuApi')
const userDataApi = require('../features/userData/dataSources/userDataApi')
const changePasswordApi = require('../features/changePassword/dataSources/changePasswordApi')
module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  concediiPersonaleApi: new ConcediiPersonaleApi(),
  EmployeeTeamApi: new EmployeeTeamApi(),
  userDataApi: new userDataApi(),
  changePasswordApi: new changePasswordApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.EmployeeTeamApi.initialize({ context })
  dataSources.concediiPersonaleApi.initialize({ context })
  dataSources.userDataApi.initialize({ context })
  dataSources.changePasswordApi.initialize({ context })
  return dataSources
}
