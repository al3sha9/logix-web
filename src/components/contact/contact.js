import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './contact.css';
import { Col, Row } from 'react-bootstrap';


function CONTACT() {
  return (
    <div className='contact mt-5 pt-5 pb-5 darkmode-ignore w-100'  id='contact'>
        
        <Container>
            <Row>
                <Col md={12}>
                <div className='top-heading text-center mt-4 mb-5'>
                        <h2>CONTACT US</h2>
                    </div>
                </Col>
                <div className='text-start left-heading mt-2 mb-2'>
                    <h2>Get in Touch</h2>
                    <p>Do you need more information? Please contact us to find more about our products and services.</p>
                </div>
                

            </Row>
            <Row>
                <Col md={5}>
                    <div className='cover py-3 px-3'>
                        {/* <div className='form-top'>
                            <p>Share your idea with us</p>
                        </div> */}
                        <div className='form-contact px-3 py-3'>
                            <Form action="mailto:info@techalphalogix.com?subject=Feedback" method="GET">
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                                </FloatingLabel>

                            <Button type="submit" className='btn-con' value="Send">Messege</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='gb-area px-2 pt-5 pb-3'>
                        <h3 className='px-2'>Contact information</h3>
                        
                        <div className='pt-2 px-3 pb-4'>
                                <div className='py-3'><a target="_blank" href='https://www.google.com/maps/place/Tech+ALPHALOGIX+Pvt.+Ltd./@35.91618,74.352424,19z/data=!4m5!3m4!1s0x0:0x8e22fcf3964d5fbf!8m2!3d35.9161802!4d74.3524244?hl=en' className='g-t mt-3 mb-3'><i class="fa fa-map-marker  font-aw" aria-hidden="true"></i> Amir Hayat Hamiya market, Naveed Shaeed Road, Gilgit Pakistan</a></div>
                                <div className='py-3'><a target="_blank" href="mailto:info@techalphalogix.com?subject=Feedback" className='g-t mt-3 mb-3'><i class="fa fa-send font-a" aria-hidden="true"></i> infol@techalphalogix.com</a></div>
                                <div className='py-3'><a target="_blank" href='https://wa.me/+923129901860' className='g-t mt-3 mb-3'><i class="fa fa-mobile font-aw" aria-hidden="true"></i> +923129901860</a></div>


                            
                        </div>
                        
                    </div>
                </Col>
                <Col md={4}>
                
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.9073538135062!2d74.35209099827249!3d35.91616411460035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64993f0e6c903%3A0x8e22fcf3964d5fbf!2sTech%20ALPHALOGIX%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1667205974384!5m2!1sen!2s' className='frame1' ></iframe>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default CONTACT;