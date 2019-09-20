import React from "react";
import { Card } from "react-bootstrap";

import { connect } from "react-redux";

import Currencies from "./Currencies.json";

class Criptobalance extends React.Component {
  constructor(props) {
    super(props);
    const currency = Currencies.find(item => item.code === props.coinCode);
    this.coinName = currency.name;
  }

  render() {
    return (
      <Card style={{ width: "12rem" }}>
        <Card.Header>
          <strong>{this.coinName}</strong>
        </Card.Header>
        <Card.Body>
          {`1 ${this.props.coinCode} = ${this.props.rate} BRL`}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => ({
  rate: state.rates[props.coinCode]
});

export default connect(mapStateToProps)(Criptobalance);
