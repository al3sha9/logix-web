import Container from 'react-bootstrap/Container';
import './footer.css';
import { Col, Row } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import be from '../../assets/social/be.png'
import wp from '../../assets/social/wp.png'
import fb from '../../assets/social/fb.png'
import git from '../../assets/social/git.png'
import twit from '../../assets/social/twit.png'
import inl from '../../assets/social/in.png'

import LOG1 from '../../assets/foot.png'


function FOOTER() {
    const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className='footer darkmode-ignore w-100 pt-5 pb-5'>
        
        <Container>
            <Row>
                <Col md={5}>
                    <div className='footerimg text-center mt-5'>
                    <img src={LOG1} className='mt-5'></img>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='foot-nav px-3'>
                        <div className='py-2 foot-a'><a href='#' className='last green'>Home</a></div>
                        <div className='py-2 foot-a'><a href='#' className='last'>About Us</a></div>
                        <div className='py-2 foot-a'><a href='#' className='last'>Services</a></div>
                        <div className='py-2 foot-a'><a href='#' className='last'>Portfolio</a></div>
                        <div className='py-2 foot-a'><a href='#' className='last'>Team</a></div>
                        <div className='py-2 foot-a'><a href='#' className='last'>Contact</a></div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='ent-text mb-3 mt-3'>
                        <h4>Follow Us</h4>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Text us on Whatsapp</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <a href='https://wa.me/+923129901860'  variant="light" target="_blank" {...triggerHandler} className="d-inline-flex align-items-center">
                            <img src={wp} ref={ref} className='mt-2 mx-1 social-ico' ></img>
                            </a>
                        )}
                    </OverlayTrigger>
                    
                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Check out our Facebook Page</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <a href='https://www.facebook.com/TechAlphalogix'  variant="light" target="_blank" {...triggerHandler} className="d-inline-flex align-items-center">
                            <img src={fb} ref={ref} className='mt-2 mx-1 social-ico' ></img>
                            </a>
                        )}
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Check out our Telegram</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <a href='https://twitter.com/TAlphalogix?t=3pZhSLOEpJES97bWLfu-Zg&s=09'  variant="light" target="_blank" {...triggerHandler} className="d-inline-flex align-items-center">
                            <img src={twit} ref={ref} className='mt-2 mx-1 social-ico' ></img>
                            </a>
                        )}
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Check out our Github</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <a href='https://github.com/Nadeeshocks'  variant="light" target="_blank" {...triggerHandler} className="d-inline-flex align-items-center">
                            <img src={git} ref={ref} className='mt-2 mx-1 social-ico' ></img>
                            </a>
                        )}
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Check out our linkedin</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <a href='https://www.linkedin.com/company/techalphalogix/mycompany/'  variant="light" target="_blank" {...triggerHandler} className="d-inline-flex align-items-center">
                            <img src={inl} ref={ref} className='mt-2 mx-1 social-ico' ></img>
                            </a>
                        )}
                    </OverlayTrigger>

                    
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default FOOTER;