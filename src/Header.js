import React from 'react'
import './Header.css'
import { Row, Col } from 'react-bootstrap'

class Header extends React.Component {

  render() {
    return (
      <section className="header mb-4">
        <Row>
          <Col className="app-name py-2 text-center" md={4} xs={12}>
            obsidian
          </Col>
          <Col className="menu py-4" md xs={12}>
            <Row className="px-4 text-center">
              <Col xs={12} sm={6} md>
                <a className="">extrato</a>
              </Col>
              <Col xs={12} sm={6} md>
                <a className="">compra</a>
              </Col>
              <Col xs={12} sm={6} md>
                <a className="">venda</a>
              </Col>
              <Col xs={12} sm={6} md>
                <a className="">troca</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}
export default Header