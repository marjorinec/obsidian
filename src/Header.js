import React from 'react'
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="header mb-4">
        <Navbar.Brand>
          <strong>obsidian</strong>
        </Navbar.Brand>
        <Nav>
          <NavLink to="/balance/" className="nav-link">
            sua carteira
          </NavLink>
          <NavLink to="/statement/" className="nav-link">
            extrato
          </NavLink>
          <NavLink to="/transaction/" className="nav-link">
            transação
          </NavLink>
        </Nav>
      </Navbar>
    )
  }
}
export default Header