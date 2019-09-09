import React from 'react'
import './Header.css'
import { Row, Col } from 'react-bootstrap'

class Header extends React.Component {

  render() {
    return (
      <section className="header mb-4">
        <Row>
          <Col className="app-name pl-5 py-2" md={4} xs={12}>
            obsidian
          </Col>
          <Col className="menu py-4" md={8} xs={12}>
            <a className="p-5">extrato</a>
            <a className="p-5">compra</a>
            <a className="p-5">venda</a>
            <a className="p-5">troca</a>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Header