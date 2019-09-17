import React from 'react'
import { Card } from 'react-bootstrap'

class Balance extends React.Component {
  render() {
    return (
      <Card style={{ width: '12rem'}}>
        <Card.Body>
          <Card.Title>
            Seu Saldo
          </Card.Title>
          <Card.Text as="ul" className="list-unstyled">
            <li>R$ 100.000,00</li>
            <li>BRT 15</li>
            <li> Bitcoin 20</li>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

}

export default Balance