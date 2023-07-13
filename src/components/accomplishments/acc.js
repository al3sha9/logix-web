import Container from 'react-bootstrap/Container';
import './acc.css';
import { Col, Row } from 'react-bootstrap';


function ACC() {
  return (
    <div className='acc pt-5 pb-5' id='acc'>
        
        <Container>
            <Row>
                <Col md={12}>
                    <div className='top-heading text-center'>
                        <h2 className='darkmode-ignore'>ACCOMPLISHMENTS</h2>
                    </div>
                    <div className='top-para text-center'>
                        <p>IN THE LAST 6 YEARS WE HAVE</p>
                    </div>
                    <div className='cards-black'>
                    <div className='card-dark mt-4 animate__animated animate__fadeInLeft'>
                            <Row>
                                <Col md={10}>
                                    <h4>Earned around $200K+ only from Upwork with a success score of 100%</h4>
                                </Col>
                                <Col md={2}>
                                    <h3>01</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='card-dark mt-4 animate__animated animate__fadeInRight'>
                            <Row>
                                <Col md={10}>
                                    <h4>Working with the same clients since the beginning of  our career on Upwork.</h4>
                                </Col>
                                <Col md={2}>
                                    <h3>02</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='card-dark mt-4 animate__animated animate__fadeInLeft'>
                            <Row>
                                <Col md={10}>
                                    <h4>Delivered 45+ Projects.</h4>
                                </Col>
                                <Col md={2}>
                                    <h3>03</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='card-dark mt-4 animate__animated animate__fadeInRight'>
                            <Row>
                                <Col md={10}>
                                    <h4>Worked with 50+ people from around the world.</h4>
                                </Col>
                                <Col md={2}>
                                    <h3>04</h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='card-dark mt-4 animate__animated animate__fadeInLeft'>
                            <Row>
                                <Col md={10}>
                                    <h4>Delivered Created a warm and welcoming office space. + Projects.</h4>
                                </Col>
                                <Col md={2}>
                                    <h3>05</h3>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ACC;