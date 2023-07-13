import Container from 'react-bootstrap/Container';
import './services.css';
import { Col, Row } from 'react-bootstrap';
import IMAGE1 from '../../assets/frame1.png';
import IMAGE2 from '../../assets/ui.png';
import IMAGE3 from '../../assets/cloud.png';



function SERVICES() {
  return (
    <div className='services pt-5' id='services'>
        
        <Container>
            <Row>
                <Col md={12}>
                <div className='top-heading text-center mt-4 mb-5'>
                        <h2 className='darkmode-ignore'>SERVICES</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} className='text-center box-serve px-2 py-5'>
                <h2 className='pb-3 serif-1'>WEB DEVELOPMENT</h2>
                    <img src={IMAGE1} className="myDiv img-fluid mx-2" ></img>
                    
                </Col>
                <Col md={4} className='text-center box-serve px-2 py-5'>
                <h2 className='pb-3 serif-1'>UI / UX</h2>
                    <img src={IMAGE2}  className="myDiv img-fluid "></img>
                </Col>
                <Col md={4} className='text-center box-serve px-2 py-5'>
                <h2 className='pb-3 serif-1'>ClOUD COMPUTING</h2>
                    <img src={IMAGE3} className="myDiv img-fluid mx-2"></img>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default SERVICES;