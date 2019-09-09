import React from 'react'
import { Card } from 'react-bootstrap'

class Criptobalance extends React.Component {
  constructor(props) {
    super(props)
    this.coinCode = props.coinName === "Bitcoin" ? "BTC" : "BRT"
  }
  render() {

    return (
      <Card style={{ width: '12rem'}}>
        <Card.Body>
          <Card.Title>
            {this.props.coinName}
          </Card.Title>
          <Card.Text>
            {this.coinCode} = X BRL
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Criptobalance