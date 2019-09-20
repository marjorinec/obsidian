import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

class Balance extends React.Component {
  render() {
    return (
      <Card style={{ width: '12rem'}}>
        <Card.Header>
          <strong>Sua Carteira</strong>
        </Card.Header>
        <ListGroup>
          <ListGroup.Item>
            {`R$ ${this.props.balance['BRL']}`}
          </ListGroup.Item>
          <ListGroup.Item>
            {`BRT ${this.props.balance['BRT']}`}
          </ListGroup.Item>
          <ListGroup.Item>
            {`BTC ${this.props.balance['BTC']}`}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }

}

const mapStateToProps = (state) => ({
  balance: state.balance
})

export default connect(
  mapStateToProps
)(Balance)