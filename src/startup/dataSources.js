const ConcediiPersonaleApi = require('../features/concedipersonale/datasources/concediiPersonaleApi')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const EmployeeTeamApi = require('../features/teamsmenu/DataSources/teamsmenuApi')
const EmployeeTeamBBApi = require('../features/teamBB/DataSources/teamsmenuApi')
const EmployeeTeamStrangerApi = require('../features/teamStranger/DataSources/teamsmenuApi')
const userDataApi = require('../features/userData/dataSources/userDataApi')
const changePasswordApi = require('../features/changePassword/dataSources/changePasswordApi')
const EmployeeAllEmpApi = require('../features/allemp/DataSources/teamsmenuApi')
const concediuApi = require('../features/cerereconcediu/datasources/concediuApi')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  concediiPersonaleApi: new ConcediiPersonaleApi(),
  EmployeeTeamApi: new EmployeeTeamApi(),
  EmployeeTeamBBApi: new EmployeeTeamBBApi(),
  EmployeeAllEmpApi: new EmployeeAllEmpApi(),
  concediuApi: new concediuApi(),
  EmployeeTeamStrangerApi: new EmployeeTeamStrangerApi(),
  userDataApi: new userDataApi(),
  changePasswordApi: new changePasswordApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.EmployeeTeamApi.initialize({ context })
  dataSources.EmployeeTeamBBApi.initialize({ context })
  dataSources.EmployeeAllEmpApi.initialize({ context })
  dataSources.EmployeeTeamStrangerApi.initialize({ context })
  dataSources.concediiPersonaleApi.initialize({ context })
  dataSources.userDataApi.initialize({ context })
  dataSources.changePasswordApi.initialize({ context })
  dataSources.concediuApi.initialize({ context })
  return dataSources
}
