import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class Statement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [
        {
          destination: 'BRL', value: 100000, date: new Date()
        },
        {
          source: 'BRL', destination: 'BRT', value: 15, sourceValue: 200, date: new Date()
        },
        {
          source: 'BRL', destination: 'BTC', value: 10, sourceValue: 400, date: new Date()
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