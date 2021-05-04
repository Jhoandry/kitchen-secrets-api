import React from 'react'
import "./index.css"
import { Navbar, Nav } from 'react-bootstrap'
import logo from "../../img/logo-512-white.png"

const Header = () => {
    return (
      <>
        <Navbar fixed="top" expand="lg">
            <Navbar.Brand>
                <img
                    src={logo}
                    className="d-inline-block align-top img-fluid"
                    alt="Kitchen recipes"/>
                <label className="title"> Kitchen Secret's by Jhoa </label>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav defaultActiveKey="/home">
                    <Nav.Link href="/home" eventKey="/home">Home</Nav.Link>
                    <Nav.Link href="/scores" eventKey="/scores">Scores</Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };

export default Header