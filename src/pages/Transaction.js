import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import Currencies from './../Currencies.json'

class Transaction extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'source': null,
      'destination': null
    }

    this.handleCoinSelection = this.handleCoinSelection.bind(this)
  }

  handleCoinSelection({target}) {
    this.setState({ [target.name]: target.value })
  }

  renderCoinSelector(varName, disabledCurrency) {
    const currencyList = Currencies.map(({ name, code }) => {
      return (
        <Col key={code}>
          <Form.Check 
            type="radio"
            name={varName}
            value={code}
            label={name}
            checked={this.state[varName] === code}
            onChange={this.handleCoinSelection}
            disabled={disabledCurrency === code}
          />
        </Col>
      )
    })

    return (
      <Row>
        {currencyList}
      </Row>
    )
  }

  render() {
    return (
      <Container>
        <Form>
          <section className="source">
            <h3>Moeda origem</h3>
            {this.renderCoinSelector('source', this.state.destination)}
          </section>
          <section className="destination">
            <h3>Moeda destino</h3>
            {this.renderCoinSelector('destination', this.state.source)}
          </section>                  
        </Form>
      </Container>
    )
  }
}

export default Transaction