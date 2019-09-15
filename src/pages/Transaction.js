import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import Currencies from './../Currencies.json'

class Transaction extends React.Component {

  renderCoinSelector(varName) {
    const currencyList = Currencies.map(({ name, code }) => {
      return (
        <Col key={code}>
          <Form.Check
            type="radio"
            name={varName}
            value={code}
            label={name}
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
            {this.renderCoinSelector('source')}
          </section>
          <section className="destination">
            <h3>Moeda destino</h3>
            {this.renderCoinSelector('destination')}
          </section>                  
        </Form>
      </Container>
    )
  }
}

export default Transaction