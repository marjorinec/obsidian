import React from 'react'
import { Container, Form, Row, Col, InputGroup, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Currencies from './../Currencies.json'

class Transaction extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'source': null,
      'destination': null,
      'value': 0,
      'convertedValue': null
    }

    this.handleCoinSelection = this.handleCoinSelection.bind(this)
    this.handleValueInput = this.handleValueInput.bind(this)
  }

  handleCoinSelection({target}) {
    this.setState({ [target.name]: target.value })
  }

  handleValueInput({target}) {
    this.setState({ value: target.value })
    const convertedValue = this.convert(
      this.state.source,
      this.state.destination,
      target.value
    )
    this.setState({ convertedValue: convertedValue })
  }

  convert(source, destination, value) {
    let convertedValue, sourceValue, destinationValue
    
    if (source !== 'BRL') {
      sourceValue = value / this.props.rates[source]
    } else { sourceValue = value }
    
    if (destination !== 'BRL') {
      destinationValue = value / this.props.rates[destination]
    } else { destinationValue = value }
    
    convertedValue = destinationValue * ( value / sourceValue )

    return convertedValue
  }

  renderCoinSelector(varName, disabledCurrency) {
    const currencyList = Currencies.map(({ name, code }) => {
      const isDisabled = disabledCurrency === code
      const isSelected = this.state[varName] === code 
      return (
        <Col key={code} className="text-center my-3">
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

  sampleRateLine() {
    return `1 ${this.state.source} = ${this.convert(this.state.source, this.state.destination, 1).toFixed(6)} ${this.state.destination}`
  }

  renderConvertedValue() {
    if (this.state.convertedValue) {
      return `= ${this.state.convertedValue.toFixed(6)} ${this.state.destination}`
    } else {
      return 'Digite um valor para o ver convertido'
    }
  }


  renderValueSection() {
    if (this.state.source && this.state.destination) {
      return (
        <Card className="value">
          <Card.Header as="h5">Quanto deseja converter?</Card.Header>
          <Card.Body>
            <p className="text-center">{this.sampleRateLine()}</p>
            <Row className="align-items-center">
              <Col>
                <InputGroup>
                  <Form.Control
                    type="number" onChange={this.handleValueInput} value={this.state.value}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text >
                      {this.state.source}
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>  
              </Col>
              <Col className="align-middle">
                {this.renderConvertedValue()}
              </Col>
            </Row>
            
          </Card.Body>
          <Card.Footer className="text-right">
            <Button variant="primary" type="button">
              Converter
            </Button>
          </Card.Footer>
        </Card>  
      )
    }
  }

  render() {
    return (
      <Container>
        <Form>
          <Card className="source">
            <Card.Header as="h5">Selecione a Moeda de Origem</Card.Header>
            {this.renderCoinSelector('source', this.state.destination)}
          </Card>
          <Card className="destination my-3">
            <Card.Header as="h5">Selecione a Moeda de Destino</Card.Header>
            {this.renderCoinSelector('destination', this.state.source)}
          </Card>
          {this.renderValueSection()}                
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  rates: state.rates,
  balance: state.balance
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction)