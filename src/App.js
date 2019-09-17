import React from 'react'
import Header from './Header'
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import Statement from './pages/Statement'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import axios from 'axios'
import { setRate as setRateAction } from './store/actions'

class App extends React.Component {

  async getCoinValue(coinCode) {
    let value
    if (coinCode === 'BTC') {
      value = await this.fetchBitcoinValue()
    } else {
      value = await this.fetchDolarValue()
    }

    this.props.setRate(coinCode, value)
  }

  async fetchBitcoinValue() {
    const bitcoinValue = await axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/")
    return bitcoinValue.data.ticker.buy
  }

  getUsefulDate(dayCounter=0) {
    const currentDay = new Date()
    let day = currentDay.getDate() - dayCounter
    let month = currentDay.getMonth() + 1
    const year = currentDay.getFullYear()

    if (month.toString().length === 1) {
      month = `0${month}`
    }

    if (day.toString().length === 1) {
      day = `0${day}`
    }

    return `${month}/${day}/${year}`
  }

  //A API do Banco Central do Brasil parece não retornar a cotação do dólar em finais de semana e nas primeiras horas do dia, portanto
  //quando a função não consegue obter a cotação, ela tenta pegar a do dia anterior até ter sucesso
  async fetchDolarValue() {
    let dollarData
    let dollarValue = undefined
    let currentDate = this.getUsefulDate()
    let dayCounter = 0

    while (dollarValue === undefined) {
      currentDate = this.getUsefulDate(dayCounter)
      dollarData = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${currentDate}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
      dollarValue = dollarData.data.value[0]
      dayCounter += 1
    }

    return dollarValue.cotacaoCompra

  }

  async componentDidMount(prevProps, prevState) {
    ['BTC', 'BRT'].forEach(async (coin) => await this.getCoinValue(coin))
  }

  render() {
    return (
      <Router>
        <Header/>  
        <Route path="/" exact component={Home}/>
        <Route path="/transaction/" component={Transaction}/>
        <Route path="/statement/" component={Statement}/>
      </Router>
    )
  }
}


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  setRate: setRateAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)