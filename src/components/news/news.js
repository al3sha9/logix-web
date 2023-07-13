import Container from 'react-bootstrap/Container';
import './news.css';
import { Col, Row } from 'react-bootstrap';
import Slider from '../slidernews/slider';
import IMGNEWS from '../../assets/achi.png';
import IMGNEWS1 from '../../assets/achi2.png';
import IMGNEWS2 from '../../assets/achi1.png';
import FOOTER from '../footer/footer';


function NEWS() {
  return (
    <div className='news' id='news'>
      <Slider />
      <Container>
        <Row>
          <Col md={12}>
            <div className='top-heading mt-5 mb-5 text-center'>
              <h2 className='darkmode-ignore'>NEWS AND EVENTS</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='px-0'>
            <div className='bg-dark-news darkmode-ignore px-5 py-5 mt-3 mb-3'>
              <h3>Prime Minister Excellence Award</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere mauris elit, dictum vestibulum sem sagittis. Odio nec fames in porttitor ipsum enim fames ipsum. Sed nibh congue elit, suspendisse suspendisse eros, faucibus. Dolor, nibh leo curabitur eleifend vestibulum posuere.</p>
              <a href='# ' className='pb-5'>Learn More</a>
            </div>
          </Col>
          <Col md={6} className='px-0'>
            <img width='100%' height='295px' className='mt-3 mb-3' src={IMGNEWS}></img>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='px-0'>
            <img width='100%' height='295px' className='mt-3 mb-3' src={IMGNEWS1}></img>
          </Col>
          <Col md={6} className='px-0'>
            <div className='bg-dark-news darkmode-ignore px-5 py-5 mt-3 mb-3'>
              <h3>gb tech  hackathon 2022</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere mauris elit, dictum vestibulum sem sagittis. Odio nec fames in porttitor ipsum enim fames ipsum. Sed nibh congue elit, suspendisse suspendisse eros, faucibus. Dolor, nibh leo curabitur eleifend vestibulum posuere.</p>
              <a href='# ' className='pb-5'>Learn More</a>
            </div>
          </Col>

        </Row>

        <Row>
          <Col md={6} className='px-0'>
            <div className='bg-dark-news darkmode-ignore px-5 py-5 mt-3 mb-3'>
              <h3>gb tech  hackathon 2022</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere mauris elit, dictum vestibulum sem sagittis. Odio nec fames in porttitor ipsum enim fames ipsum. Sed nibh congue elit, suspendisse suspendisse eros, faucibus. Dolor, nibh leo curabitur eleifend vestibulum posuere.</p>
              <a href='# ' className='pb-5'>Learn More</a>
            </div>
          </Col>
          <Col md={6} className='px-0'>
            <img width='100%' height='295px' className='mt-3 mb-3' src={IMGNEWS2}></img>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='seemore darkmode-ignore w-100 text-center py-3 mt-5 mb-5 rounded'>
              <a href='#'>See more</a>
            </div>
          </Col>
        </Row>
      </Container>
      <FOOTER />
    </div>
  );
}

export default NEWS;