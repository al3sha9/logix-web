import Container from 'react-bootstrap/Container';
import './about.css';
import { Col, Row } from 'react-bootstrap';
import FRAME1 from '../../assets/Frame.png';
import FRAME2 from '../../assets/frame2.png';



function ABOUT() {
  return (
    <div className='portfolio' id='portfolio'>
        
        <Container>
            <Row>
                <Col md={8}>
                <div className='about-head pt-5'>
                        <h2 className='darkmode-ignore'>About Us</h2>
                        <p className='about-p mb-4'>AlphaLogix is a brain child of Nadia Iqbal and Shaukat Hayat, co-founders of the company and a power couple. Nadia is an IT graduate who believes in the prosperity of businesses fueled by technology and adherence of fine coding standards. Shaukat, a design graduate, knows that you need eye-catching, sophisticated designs for a grade of pure professionalism to grow your business.</p>
                        <p className='about-p'>
                        AlphaLogix is a tech-based company specializing in web development and design. We are in business since 2019 with a small, very dedicated and skilled team. We offer fair pricing and good communication, which is the heart of BUSINESS, and we take very much pride in it. Our goal is to develop and design your dreams for you. We specialize in Web development, SAAS, Cloud computing and Amazon web services along with UX/UI design.
                        </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='about-side pt-5 text-center'>
                        <img src={FRAME1} className='img-side img-fluid'></img>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                    <div className='about-side pt-5 text-center'>
                        <img src={FRAME2} className='img-side1 img-fluid'></img>
                    </div>
                </Col>
            <Col md={8}>
                <div className='about-head pt-5'>
                        <h2 className='darkmode-ignore'>Our Goal</h2>
                        <p className='about-p mb-4'>Our goal is to create a work-life balance for our team and inspire other people through this journey. We have carved a space for like-minded people, working together on value creation, and the idea brought AlphaLogix to life.</p>
                        <p className='about-p'>
                            We develop dreams for everyone. If you can imagine it, we can help you design and develop it into a reality. Whether it's long-term sustainability you're looking for, or performance, security, or a strong impact on the society, we are here to empower and hold every hand to build a better community and brighter future together.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ABOUT;