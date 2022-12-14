const ConcediiPersonaleApi = require('../features/concedipersonale/datasources/concediiPersonaleApi')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const EmployeeTeamApi = require('../features/teamsmenu/DataSources/teamsmenuApi')
const EmployeeTeamBBApi = require('../features/teamBB/DataSources/teamsmenuApi')
const EmployeeTeamStrangerApi = require('../features/teamStranger/DataSources/teamsmenuApi')
const userDataApi = require('../features/userData/dataSources/userDataApi')
const changePasswordApi = require('../features/changePassword/dataSources/changePasswordApi')
const EmployeeAllEmpApi = require('../features/allemp/DataSources/teamsmenuApi')
const GestionareConcediiApi = require('../features/gestionareConcedii/datasources/gestionareConcediiApi')
const echipeApi = require('../features/echipe/dataSources/echipeApi')
const emailApi = require('../features/email/dataSources/emailApi')
const inlocuitoriApi = require('../features/inlocuitori/dataSources/inlocuitoriApi')
const concediuApi = require('../features/cerereconcediu/datasources/concediuApi')
const tipConcediuApi = require('../features/tipConcediu/dataSources/tipConcediuApi')
const functiiApi = require('../features/functii/dataSources/functiiApi')

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
  changePasswordApi: new changePasswordApi(),
  echipeApi: new echipeApi(),
  gestionareConcediiApi: new GestionareConcediiApi(),
  emailApi: new emailApi(),
  inlocuitoriApi: new inlocuitoriApi(),
  tipConcediuApi: new tipConcediuApi(),
  functiiApi: new functiiApi()
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
  dataSources.echipeApi.initialize({ context })
  dataSources.gestionareConcediiApi.initialize({ context })
  dataSources.emailApi.initialize({ context })
  dataSources.inlocuitoriApi.initialize({ context })
  dataSources.concediuApi.initialize({ context })
  dataSources.tipConcediuApi.initialize({ context })
  dataSources.functiiApi.initialize({ context })
  return dataSources
}
