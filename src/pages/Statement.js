import React from "react";
import { Table, Container, Card } from "react-bootstrap";

import { connect } from "react-redux";

class Statement extends React.Component {
  render() {
    const transactionsList = this.props.transactions
      .reverse()
      .map(({ destination, source, value, sourceValue, date }, id) => {
        let sourceColumn;
        if (sourceValue) {
          sourceColumn = (
            <td className="text-danger">
              -{sourceValue} {source}
            </td>
          );
        }
        return (
          <tr key={id}>
            <td>{date.toLocaleString("pt-BR")}</td>
            {sourceColumn}
            <td className="text-success" colSpan={sourceValue ? 1 : 2}>
              +{value} {destination}
            </td>
          </tr>
        );
      });

    return (
      <Container>
        <Card>
          <Card.Header as="h5">Suas transações</Card.Header>
          <Table striped bordered className="my-0">
            <tbody>{transactionsList}</tbody>
          </Table>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(Statement);
