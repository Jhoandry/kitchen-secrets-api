import React from 'react'
import "./index.css"
import { Navbar } from 'react-bootstrap'
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
                <label className="title"> Kitchen Recipes by Jhoa </label>
            </Navbar.Brand>
        </Navbar>
      </>
    );
  };

export default Header