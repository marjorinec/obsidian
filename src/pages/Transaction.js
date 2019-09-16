import React from 'react'
import { Container, Form, Row, Col, InputGroup, Button, Card } from 'react-bootstrap'
import Currencies from './../Currencies.json'

class Transaction extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'source': null,
      'destination': null,
    }

    this.handleCoinSelection = this.handleCoinSelection.bind(this)
  }

  handleCoinSelection({target}) {
    this.setState({ [target.name]: target.value })
  }

  renderCoinSelector(varName, disabledCurrency) {
    const currencyList = Currencies.map(({ name, code }) => {
      const isDisabled = disabledCurrency === code
      const isSelected = this.state[varName] === code 
      return (
        <Col key={code} className="text-center">
          <label>
            <Card className="currency-selector text-center p-4" 
              bg={isSelected ? 'secondary' : 'light'}
              text={isDisabled ? 'muted' : ''}
            >
              <h2>{code}</h2>
              <span className="">{name}</span>
              <Form.Check style={{display: 'none'}}
                type="radio"
                name={varName}
                value={code}
                checked={isSelected}
                onChange={this.handleCoinSelection}
                disabled={isDisabled}
              />
            </Card>
          </label>  
        </Col>
      )
    })

    return (
      <Row>
        {currencyList}
      </Row>
    )
  }

  renderValueSection() {
    if (this.state.source && this.state.destination) {
      return (
        <section className="value">
          <h3>Valor</h3>
          cotação
          saldo
          <InputGroup>
            <Form.Control
              type="number"
            />
            <InputGroup.Append>
              <InputGroup.Text>
                {this.state.source}
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Button variant="primary" type="button">
            Converter
          </Button>
        </section>  
      )
    }
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
          {this.renderValueSection()}                
        </Form>
      </Container>
    )
  }
}

export default Transaction