import Container from 'react-bootstrap/Container';
import './header.css';
import { Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Darkmode from 'darkmode-js';



function HEADER() {
  useEffect(()=>{
    document.addEventListener("scroll", ()=>{
      let hed = document.getElementsByClassName('.nav-cus');
      if (window.scrollY > 150) {
        hed.classList.add("scrolled");
      }else{
        hed.classList.remove("scrolled");
      }
    })
  })
  const options = {
   
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#64CD5F',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    label: '🌙', // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
darkmode.showWidget();  

  
  
  
  return (
    <div className='header' id='header'>
        
        <Container>
            <Row>
                <Col md={6}>
                </Col>
                <Col md={6} >
                     <div className='toper animate__animated animate__backInRight'>
                     <h1 className='top-text '>WE CODE <span>YOUR DREAMS</span><br></br>WE DESIGN <span>YOUR VISION</span></h1>
                        
                     </div>
                     
                     <p className='animate__animated animate__backInRight paraaa'>A team of skilled coders and designers , always ready and devoted to turn your imagination into a fully-functional website that looks exactly like you have envisioned. </p>
                    <div className='icon-down mt-4'>
                      <a href='#acc'>
                      <i class="fa-solid fa-arrow-down"></i>
                        </a> 
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HEADER;