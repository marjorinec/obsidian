import React from 'react'
import { Card } from 'react-bootstrap'

class Balance extends React.Component {
  render() {
    return (
      <Card bg="success" style={{ width: '12rem'}}>
        <Card.Body>
          <Card.Title>
            Saldo total em reais
          </Card.Title>
          <Card.Text>
            R$ 100.000,00
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

}

export default Balance