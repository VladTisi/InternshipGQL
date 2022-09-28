const { captureRejectionSymbol } = require('koa')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class concediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  //`?TipConcediuId=${input.TipConcediuId}&Inceput=${input.Data_inceput}&Sfarsit=${input.Data_sfarsit}&comentarii=${input.Comentarii}&angajatId=${input.AngajatId}&inlocuitorId=${input.InlocuitorId}`)
  async insertCerereConcediu(input) {
    const concediiData = await this.post(`CerereConcediu/InsertConcediuGQL`, input)
    return true
  }
}

module.exports = concediuApi
