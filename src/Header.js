import React from 'react'
import './Header.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <section className="header mb-4">
        <Row>
          <Col className="app-name align-self-center text-center" md={4} xs={12}>
            obsidian
          </Col>
          <Col className="menu py-4" md xs={12}>
            <Row className="px-4 text-center">
              <Col xs={12} sm={6} md>
                <Link to="/transaction/" className="transaction">EXTRATO</Link>
              </Col>
              <Col xs={12} sm={6} md>
                <Link to="/transaction/" className="transaction">COMPRA</Link>
              </Col>
              <Col xs={12} sm={6} md>
                <Link to="/transaction/" className="transaction">VENDA</Link>
              </Col>
              <Col xs={12} sm={6} md>
                <Link to="/transaction/" className="transaction">TROCA</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}
export default Header