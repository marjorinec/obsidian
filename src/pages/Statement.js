import React from 'react'
import { Table, Container } from 'react-bootstrap'

import {connect} from 'react-redux'

class Statement extends React.Component {
  
  render() {
    const transactionsList = this.props.transactions.map(
      ({ destination, source, value, sourceValue, date }, id) => {
        let sourceColumn
        if (sourceValue) {
          sourceColumn = (
            <td className="text-danger">
              -{sourceValue} {source}
            </td>            
          )
        }
        return (
          <tr key={id}>
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

const mapStateToProps = (state) => ({
  transactions: state.transactions
})

export default connect(
  mapStateToProps
)(Statement)