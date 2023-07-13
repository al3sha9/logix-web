import Container from 'react-bootstrap/Container';
import './portfolio.css';
import { Col, Row } from 'react-bootstrap';
import por from '../../assets/port.jpg';
import por1 from '../../assets/port1.jpg';
import por2 from '../../assets/thumb.jpg';




function PORTFOLIO() {
  return (
    <div className='portfolio' id='portfolio'>
        
        <Container>
            <Row>
                <Col md={12}>
                <div className='top-heading text-center mt-4 mb-5'>
                        <h2 className='darkmode-ignore'>PORTFOLIO</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className='portfolio-thumbnail mx-2 my-2'>
                        <img src={por} width='389px' className='port-img'></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='portfolio-thumbnail mx-2 my-2'>
                    <img src={por1} width='389px' className='port-img'></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='portfolio-thumbnail mx-2 my-2'>
                    <img src={por} width='389px' className='port-img'></img>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="px-0">
                    <div className='portfolio-thumbnail mx-2 my-2'>
                    <img src={por2} width='100%' height='261px' className='port-img'></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='portfolio-thumbnail mx-2 my-2'>
                    <img src={por1} width='389px' className='port-img'></img>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className='portfolio-thumbnail px-2 mx-2 my-2'>
                    <img src={por1} width='389px' className='port-img'></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='portfolio-thumbnail px-2 mx-2 my-2'>
                    <img src={por} width='389px' className='port-img'></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='portfolio-thumbnail px-2 mx-2 my-2'>
                    <img src={por1} width='389px' className='port-img'></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default PORTFOLIO;