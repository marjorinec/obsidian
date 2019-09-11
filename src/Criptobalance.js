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
    if (coinCode === 'BTC') {
      const bitcoinValue = await axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/")
      this.setState({"coinValue": bitcoinValue.data.ticker.buy})
    } else {
      this.setState({"coinValue": "dol"}) 
    }
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