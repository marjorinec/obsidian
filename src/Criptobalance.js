import React from 'react'
import { Card } from 'react-bootstrap'

class Criptobalance extends React.Component {
  constructor(props) {
    super(props)
    this.coinCode = props.coinName === "Bitcoin" ? "BTC" : "BRT"
  }
  render() {

    return (
      <Card bg="success" style={{ width: '12rem'}}>
        <Card.Body>
          <Card.Title>
            Saldo em {this.props.coinName}
          </Card.Title>
          <Card.Text>
            42 {this.coinCode}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Criptobalance