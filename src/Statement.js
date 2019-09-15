import React from 'react'
import { Table, Container } from 'react-bootstrap'

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
        let sourceColumn = ""
        if (sourceValue) {
          sourceColumn = (
            <td className="text-danger">
              -{sourceValue} {source}
            </td>            
          )
        }
        return (
          <tr>
            <td className="text-success" colSpan={ sourceValue ? 1 : 2 }>
              +{value} {destination}
            </td>
            {sourceColumn}
            <td>
              {date.toLocaleString('pt-BR')}
            </td>
          </tr>  
        )
      }
    )

    return (
      <Container>
        <Table striped bordered>
          <tbody>
            {transactionsList}
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default Statement