const { captureRejectionSymbol } = require('koa')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class concediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async ZileRamaseOdihna(AngajatId) {
    const data = await this.get(`CerereConcediu/GetZileRamase?angajatId=${AngajatId}`)
    return data
  }
  async ZileRamaseDeces(AngajatId) {
    const data = await this.get(`CerereConcediu/GetZileDeces?angajatId=${AngajatId}`)
    return data
  }
  async ZileRamaseMedical(AngajatId) {
    const data = await this.get(`CerereConcediu/GetZileRamaseMedical?angajatId=${AngajatId}`)
    return data
  }
  async ZileRamaseNeplatite(AngajatId) {
    const data = await this.get(`CerereConcediu/GetZileNeplatite?angajatId=${AngajatId}`)
    return data
  }

  async insertCerereConcediu(input) {
    const concediiData = await this.post(`CerereConcediu/InsertConcediuGQL`, input)
    return true
  }

  async GetConcediiInlocuitor(input) {
    const concedii = await this.get(
      `CerereConcediu/GetConcediuDeja?angajatId=${input.angajatId}&Inceput=${input.data_inceput}&Sfarsit=${input.data_sfarsit}`
    )
    return concedii
  }
}

module.exports = concediuApi
