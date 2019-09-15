import React from 'react'
import { Table } from 'react-bootstrap'

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
      ({ destination, source, value, sourceValue, date }) => {
        return (
          <tr>
            <td className="text-success">
              +{value} {destination}
            </td>
            <td className="text-danger">
              -{sourceValue} {source}
            </td>
            <td>
              {date.toLocaleString('pt-BR')}
            </td>
          </tr>  
        )
      }
    )

    return (
      <Table striped bordered>
        <tbody>
          {transactionsList}
        </tbody>
      </Table>
    )
  }
}

export default Statement