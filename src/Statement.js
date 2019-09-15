import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class Statement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [
        {
          destination: 'BRL',
          value: 100000
        },
        {
          source: 'BRL', destination: 'BRT', value: 15, rate: 0.12
        },
        {
          source: 'BRL', destination: 'BTC', value: 10, rate: 0.20
        }
      ]
    }
  }
  
  render() {
    const transactionsList = this.state.transactions.map(
      ({ destination, source, value }) => {
        return (
          <ListGroupItem>
            {source} -> {destination} : {value}
          </ListGroupItem>  
        )
      }
    )

    return (
      <ListGroup>
        {transactionsList}
      </ListGroup>
    )
  }
}

export default Statement