import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';


import NavDropdown from 'react-bootstrap/NavDropdown';
import LOG from '../../assets/logo-1.png'

function NAVBAR() {

  



  useEffect(() => {
    document.addEventListener("scroll", () => {
      // console.log("windows scroll", window.scrollY)
      let hed = document.getElementById('nav-cus');
      if (window.scrollY > 150) {
        hed?.classList?.add("scrolled");
      } else {
        hed?.classList?.remove("scrolled");
      }
    })
  }, [window.scrollY])

  const [wall, setwall] = useState('light');
  const togglewall = () => {
    if (wall === 'light') {
      setwall('dark');
    } else {
      setwall('light');
    }
  };



  return (
    <>
      <Navbar collapseOnSelect id='nav-cus' className={`App ${wall}`} sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="https://www.techalphalogix.com">
            <img src={LOG} className="logo-top"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            
          <Link to="/" className='mm mx-1'>HOME</Link>
            
            <Nav.Link href="#acc" className='mx-1'>ACCOMPLISHMENTS</Nav.Link>
            <Nav.Link href="#services" className='mx-1'>SERVICES</Nav.Link>
            <Nav.Link href="#portfolio" className='mx-1'>PORTFOLIO</Nav.Link>
            <Nav.Link href="#team" className='mx-1'>TEAM</Nav.Link>
                <NavDropdown title="ABOUT US" className='mx-2 text-center' id="navbarScrollingDropdown">
                  <Link className='mx-1 mm px-2' to="/news">
                    NEWS AND EVENTS
                  </Link>
                </NavDropdown>
            <Nav.Link href="#contact" className='mx-2'>CONTACT US</Nav.Link>
            {/* <Nav.Link onClick={togglewall} className='mx-2'><i className='fa fa-moon'></i></Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NAVBAR;