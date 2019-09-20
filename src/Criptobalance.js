import React from 'react'
import { Card } from 'react-bootstrap'


import { connect } from 'react-redux'

import Currencies from './Currencies.json'


class Criptobalance extends React.Component {
  constructor(props) {
    super(props)
    const currency = Currencies.find((item) => item.code === props.coinCode) 
    this.coinName = currency.name
  }

  render() {
    return (
      <Card style={{ width: '12rem'}}>
        <Card.Body>
          <Card.Title>
            {this.coinName}
          </Card.Title>
          <Card.Text>
            {this.props.coinCode} = X BRL {this.props.rate}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => ({
  rate: state.rates[props.coinCode],
})

export default connect(
  mapStateToProps,
)(Criptobalance)
