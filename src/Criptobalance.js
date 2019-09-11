import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import axios from 'axios'

class Criptobalance extends React.Component {
  constructor(props) {
    super(props)
    this.coinCode = props.coinName === "Bitcoin" ? "BTC" : "BRT"
    this.state = {
      "coinValue": "",
      "ready": false
    }
  }

  async getCoinValue(coinCode) {
    let value
    if (coinCode === 'BTC') {
      value = await this.fetchBitcoinValue()
    } else {
      value = await this.fetchDolarValue()
    }

    this.setState({ "coinValue": value })
  }

  async fetchBitcoinValue() {
    const bitcoinValue = await axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/")
    return bitcoinValue.data.ticker.buy
  }

  getCurrentDate() {
    const currentDay = new Date()
    let day = currentDay.getDate() - 1
    let month = currentDay.getMonth() + 1
    const year = currentDay.getFullYear()

    console.log(month)

    if (month.toString().length === 1) {
      month = `0${month}`
    }

    if (day.toString().length === 1) {
      day = `0${day}`
    }

    return `${month}/${day}/${year}`
  }

  async fetchDolarValue() {
    const currentDate = this.getCurrentDate()
    console.log(currentDate)
    console.log(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${currentDate}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
    const dollarData = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${currentDate}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
    console.log(dollarData)
    const dollarValue = dollarData.data.value[0].cotacaoCompra

    return dollarValue
  }


  async componentDidMount(prevProps, prevState) {
      await this.getCoinValue(this.coinCode)
      this.setState({"ready": true})
  }

  render() {
    if (this.state.ready === false) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else {
      return (
        <Card style={{ width: '12rem'}}>
          <Card.Body>
            <Card.Title>
              {this.props.coinName}
            </Card.Title>
            <Card.Text>
              {this.coinCode} = X BRL {this.state.coinValue}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }
}

export default Criptobalance