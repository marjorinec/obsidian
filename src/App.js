import React from 'react'
import Header from './Header'
import Balance from './Balance'
import Criptobalance from './Criptobalance';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="app">
      <Header/>
      <Container>
        <Row>
          <Col xs={12} md className="mb-2 mb-0-md">
            <Balance/>
          </Col>
          <Col xs={12} md>
            <Criptobalance coinName="Birita"/>
          </Col>
          <Col xs={12} md>
            <Criptobalance coinName="Bitcoin"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App