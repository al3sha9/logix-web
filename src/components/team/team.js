import Container from 'react-bootstrap/Container';
import './team.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Row } from 'react-bootstrap';
import nadia from '../../assets/team/alpha/alpha/nadia.jpg';
import shaukat from '../../assets/team/alpha/alpha/shaukat.jpg';
import danish from '../../assets/team/alpha/alpha/danish.jpg';
import mudd from '../../assets/team/alpha/alpha/mudd.jpg';
import ali from '../../assets/team/alpha/alpha/ask.jpg';
import moh from '../../assets/team/alpha/alpha/mohsin.jpg';
import far from '../../assets/team/alpha/alpha/farooq.jpg';
import maira from '../../assets/team/alpha/alpha/maira.jpg';
import hadia from '../../assets/team/alpha/alpha/hadia.jpg';
import sajid from '../../assets/team/alpha/alpha/sajid.jpg';
import hasnain from '../../assets/team/alpha/alpha/hasnain.jpg';
import rahila from '../../assets/team/alpha/alpha/rahila.jpg';
import par from '../../assets/team/alpha/alpha/pari.jpg';
import alishn from '../../assets/team/alpha/alpha/alishn.jpg';
import anj from '../../assets/team/alpha/alpha/anjlia.jpg';
import sha from '../../assets/team/alpha/alpha/shazia.jpg';
import asifa from '../../assets/team/alpha/alpha/asifafarhad.jpg';
import wasi from '../../assets/team/alpha/alpha/wasi.jpg';
import sam from '../../assets/team/alpha/alpha/sima.jpg';


import useWindowDimensions from './handleWindowWidth'



 
  


function TEAM() {
    const [show, setShow] = useState(false);
    const [member, setMember] = useState(null);
    const { height, width } = useWindowDimensions();
    console.log("width is :",height,width)
    
    
    
    const team={
        'danish':{
            name: 'Danish Karim',
            designation: 'CTO',
            description: 'Experienced Frontend Developer with a demonstrated history of working in the computer software industry. Skilled in AWS Amplify, Programming, JavaScript,Reactjs(Redux, Context API), MERN, TypeScript. Strong engineering professional with a Bachelors degree focused in Computer Science from COMSATS University Islamabad.',
            image: danish,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'maira':{
            name:'Maira Khushnood',
            designation: 'Web Developer',
            description: 'Hello I am working as a Frontend Web Developer from last 2+ years and have an exceptional skills in developing responsive websites. I am passionate and enthusiastic to design and develop and have the capability to create extraordinary designs according to the needs and requirements of the clients.',
            image: maira,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'alishankhan':{
            name:'Ali Shan Khan',
            designation: 'Web Developer',
            description: 'Two things I consider my passion, Technology, and Climate Action. I constantly try to learn new things about tech, I have learned HTML, CSS a little bit of JavaScript. I always try to keep up with new advancements being made by learning about them on the internet. From an early age, I’ve always been deeply interested in computing. I can always remember the feeling of wanting to know just how computers worked, why they worked, and what else they could do.',
            image: ali,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'farooq':{
            name:'Farooq Laghari',
            designation: 'Web Developer',
            description: 'I am a professional web developer. I have 1+ years of experience in the professional field . I love to build websites using ( WordPress,  HTML, CSS, bootstrap, Tawilwind,  javascript, React js Next js) My passion is to develop responsive and creative layouts for simple or complex websites..Im having vast experience in building, fixing, and maintaining Websites for my clients from all over the world. I’m here to help you design your dream website with all the functionalities that meet your business objectives.',
            image: far,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'mohsin':{
            name:'Mohsin Amir',
            designation: 'UX/UI designer',
            description: 'my name is mohsin amir. I am a freelancer at a fiver. I have done 13+ jobs with 5 stars and awesome reviews. I have experience of 2+ years in UIUX design. when I work for my clients I do a lot of research on that product and the user behaviour on it. I mostly focus on user experience design that makes great design and the product also. My first and last priority is to make products awesome. and the statistifation of my clients.',
            image: moh,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'parivash':{
            name:'Parivash Mir',
            designation: 'UX/UI designer',
            description: 'Hello, Im Parivash Mir, an experienced UI/UX Designer based in Gilgit, Pakistan, with a demonstrated history of working in the graphic design industry and more than 2 years of experience in freelance work. Skilled in Graphic Design, UI/ UX design, Mobile App Design, Documentary / Film / Video Editing, and Web Development. Strong arts and design professional with a Bachelors degree focused in Communication and Media Studies In my spare time, I enjoy reading my favorite writers and sometimes writing my thoughts . I do have lots of my writing pieces that I wrote when I couldnt even know English Grammar, properly. Being a mountain girl, I love traveling, trekking, and exploring unknown places and people. Sometimes, its reviving to see how life functions.',
            image: par,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'hasnain':{
            name:'Hasnain Hakeem',
            designation: 'UX/UI Designer',
            description: '',
            image: hasnain,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'rahila':{
            name:'Rahila Rahim',
            designation: 'Web Developer',
            description: '',
            image: rahila,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'sajid':{
            name:'Sajid Meherban',
            designation: 'UX/UI designer',
            description: 'I am Sajid Meherban, and Ive worked as a UX UI Designer for 1 year. I have practical experience in building solutions that highlight inputs that drove decisions, such as company and user goals, demographic and usage data, and research findings, as well as recognizing and addressing challenges. I am a growth-oriented and resourceful professional. I provide a plethora of expertise in creating and implementing various systems and procedures to maximize resources and capabilities,resulting in new and enhanced client solutions and win-winoutcomes. Professionals and colleagues value working with me because I can point them in the direction of the greatest solutions, tools, and techniques for their particular needs. Unlike some who take delight in upholding all norms,I have a passion for the My passion is achieving the companys objectives that go above and beyond expectations.I have demonstrated the ability to create and execute impactful end-to-end communications that contribute to the effectiveness and reputation of the company.',
            image: sajid,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'hadia':{
            name:'Hadia Sher',
            designation: 'Web Developer',
            description: '',
            image: hadia,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'nadia':{
            name:'Nadia Iqbal',
            designation: 'CEO and Co-Founder',
            description: 'I am a passionate React developer who loves new challenges.I am Working as Front-end Designer and Developer for past 5 years I believe in clean code and following common React coding standards. I will always try to stick to best practices unless job requires otherwise. I am comfortable working in a team or solo I have a Bachelor of Science in Computer Science (BSCS).',
            image: nadia,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'shaukat':{
            name:'Shaukat Hayat',
            designation: 'COO and Founder',
            description: 'Experienced Communications Designer with a demonstrated history of working in the graphic design industry. Skilled in Visual Communication Design, UI/UX Design, Advertising, and Branding & Identity. Strong arts and design professional with a Bachelor of Design focused in Communication Design from National College of Arts, Lahore.',
            image: shaukat,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'muddasir':{
            name:'Mudassir Muhammad',
            designation: 'Admin Manager',
            description: 'Recently done Bachelors in Chinese language, now i am doing part time Chinese to English and English to Chinese translation on upwork and fiver as a freelancer. i also do social media marketing.',
            image: mudd,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'alishn':{
            name:'Ali Shan',
            designation: 'Web Developer',
            description: ' Hi , I am a web developer specializing in high-quality Front End-Development , I will help you transform your personal or business concept into a successful FRONT-END DESIGN based website.. I am a quick learner and love new challenges.',
            image: alishn,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'anjeela':{
            name:'Anjeela Ali',
            designation: 'Web Developer',
            description: ' Hi , I am a web developer specializing in high-quality Front End-Development , I will help you transform your personal or business concept into a successful FRONT-END DESIGN based website.. I am a quick learner and love new challenges.',
            image: anj,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'asifa':{
            name:'Asifa Farhad',
            designation: 'Web Developer',
            description: ' Hi , I am a web developer specializing in high-quality Front End-Development , I will help you transform your personal or business concept into a successful FRONT-END DESIGN based website.. I am a quick learner and love new challenges.',
            image: asifa,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'shazia':{
            name:'Shazia',
            designation: 'Web Developer',
            description: ' Hi , I am a web developer specializing in high-quality Front End-Development , I will help you transform your personal or business concept into a successful FRONT-END DESIGN based website.. I am a quick learner and love new challenges.',
            image: sha,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'wasi':{
            name:'Shirshar yar baig',
            designation: 'Android Developer',
            description: ' Hi , I am a web developer specializing in high-quality Front End-Development , Currently Im learning Flutter and Dart.',
            image: wasi,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        },
        'sam':{
            name:'Saima Asad',
            designation: 'Full Stack Developer',
            description: ' Hello, my name is Saima. I have offered my services as Software Engineer for well reputed Lahore based software Company for almost 02 years. I worked there as full stack developer. I worked on various technologies and languages like, python, MySQL ,java script. Then, I took break of some years ,for home making.Currently, I have been performing as a React Full Stack Web Developer at ALPHALOGIX ,for almost 6 months and am still in the process of gaining more experience through more years.',
            image: sam,
            linkedin: '#',
            facebook: '#',
            insta: '#'
        }
    }
    
  return (
    
    
    <div className='team pt-5 pb-5' id='team'>
        
        <Modal show={show} onHide={() => setShow(false)}size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
                                <Modal.Header closeButton>
                                
                                </Modal.Header>
                                <Modal.Body className="show-grid">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <div className='card-title1 mt-5 pt-5 text-end px-3'>
                                                <h2>{member?.name}</h2>
                                                <p className='title-botom mt-3'>{member?.designation}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={5}>
                                        <img className='card-imgg img-fluid' src={member?.image}></img>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={12}>
                                        <p className='card-paraa mt-3'>{member?.description}</p>
                                        </Col>
                                        <Col xs={12} md={12}>
                                        <div className='card-social text-center py-2'>
                                            <a href='{}'><span className='fa fa-linkedin mx-4'></span></a>
                                            <a href='#'><span className='fa fa-facebook mx-4'></span></a>
                                            <a href='#'><span className='fa fa-instagram mx-4'></span></a>
                                            <a href='#'><span className='fa fa-behance mx-4'></span></a>
                                            <a href='#'><span className='fa fa-github mx-4'></span></a>
                                        </div>
                                        </Col>
                                    </Row>
                                    </Container>
                                </Modal.Body>
                                </Modal>

        <Container>
            <Row>
                <Col md={12}>
                    <div className='top-heading text-center pb-5'>
                            <h2 className='darkmode-ignore'>TEAM</h2>
                            <p className='team-text '>AlphaLogix has a top-notch team of computer scientists, developers, designers and creative artists. AlphaLogix started in 2019 with a small, but a very dedicated and skilled team of innovators. We offer Fair pricing and good communication, which is the heart of BUSINESS, which we take very much pride in.  Our team specializes in Web Application Development, Website Graphic Design, Front-end Development, React, Next, and Gatsby, AWS cloud (SaaS), Headless WordPress, MERN stack developers and Mobile applications.</p>
                        </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <OwlCarousel items={width > 991 ? 4 : 1} className='owl-theme pt-5' loop margin={10} >
                    <div class='item'  onClick={() => {setShow(true); setMember(team.nadia)}}>
                        <div className='team-img'>
                            <img src={nadia} className="team-imgg"></img>
                        </div>
                        <div className='team-para text-center py-1'>
                        <a   className='team-a'>Nadia Iqbal</a>
                            
                            <h5>Co-Founder & CEO</h5>
                        </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.shaukat)}}>
                            <div className='team-img'>
                                    <img src={shaukat} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Shaukat Hayat</a>

                                    <h5>Founder & COO</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.danish)}}>
                                <div className='team-img'>
                                    <img src={danish} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Danish Karim</a>

                                    <h5>CTO</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.muddasir)}}>
                             <div className='team-img'>
                                    <img src={mudd} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Mudassir Muhammad</a>

                                    <h5>Admin Manager</h5>
                                </div>
                    </div>
                    <div class='item'  onClick={() => {setShow(true); setMember(team.sam)}} >
                        <div className='team-img'>
                            <img src={sam} className="team-imgg"></img>
                        </div>
                        <div className='team-para text-center py-1'>
                            <a  className='team-a'>Saima Asad</a>
                           
                            <h5>Full Stack Developer</h5>
                        </div>
                        
                    </div>
                    <div class='item'  onClick={() => {setShow(true); setMember(team.hadia)}} >
                        <div className='team-img'>
                            <img src={hadia} className="team-imgg"></img>
                        </div>
                        <div className='team-para text-center py-1'>
                            <a  className='team-a'>Hadia Sher</a>
                           
                            <h5>Web developer</h5>
                        </div>
                        
                    </div>

                    <div class='item' onClick={() => {setShow(true); setMember(team.maira)}} >
                            <div className='team-img'>
                                    <img src={maira} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                    {/* <h4>Maira Khushnood</h4> */}
                            <a   className='team-a'>Maira Khushnood</a>

                                    <h5>Web developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.parivash)}}>
                    <div className='team-img'>
                                    <img src={par} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Parivash Mir</a>

                                    <h5>UX/UI designer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.hasnain)}}>
                        <div className='team-img'>
                                    <img src={hasnain} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Hasnain Hakeem</a>

                                    <h5>UX/UI designer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.rahila)}}>
                        <div className='team-img'>
                                    <img src={rahila} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                            <a    className='team-a'>Rahila Rahim</a>
                                    
                                    <h5>Web developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.anjeela)}}>
                         <div className='team-img'>
                                    <img src={anj} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Anjeela Ali</a>

                                    <h5>Web Developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.wasi)}}>
                         <div className='team-img'>
                                    <img src={wasi} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Shirshar Yar Baig</a>

                                    <h5>Android Developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.shazia)}}>
                         <div className='team-img'>
                                    <img src={sha} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Shahzia</a>

                                    <h5>EPI</h5>
                                </div>
                    </div>
                </OwlCarousel>
                </Col>
                
            </Row>

            <Row>
                <Col md={12}>
                    <div className='top-heading mt-5  text-center'>
                            <h2 className='darkmode-ignore mt-5'>OUR INTERN</h2>
                            
                        </div>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                <OwlCarousel items={width > 991 ? 5 : 1} loop={true} className='owl-theme pt-5'  margin={10} >
                    
                    <div class='item' onClick={() => {setShow(true); setMember(team.alishankhan)}}>
                                <div className='team-img'>
                                    <img src={ali} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                            <a    className='team-a'>Ali Shan Khan</a>

                                    <h5>Web developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.farooq)}}>
                             <div className='team-img'>
                                    <img src={far} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a   className='team-a'>Farooq Laghari</a>

                                    <h5>Web developer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.mohsin)}} >
                    <div className='team-img'>
                                    <img src={moh} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a   className='team-a'>Mohsin Amir</a>

                                    <h5>UX/UI designer</h5>
                                </div>
                    </div>
                    
                   
                    <div class='item' onClick={() => {setShow(true); setMember(team.sajid)}}>
                         <div className='team-img'>
                                    <img src={sajid} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Sajid Meherban</a>

                                    <h5>UX/UI designer</h5>
                                </div>
                    </div>
                    <div class='item' onClick={() => {setShow(true); setMember(team.alishn)}}>
                         <div className='team-img'>
                                    <img src={alishn} className="team-imgg"></img>
                                </div>
                                <div className='team-para text-center py-1'>
                                <a    className='team-a'>Ali Shan</a>

                                    <h5>Web Developer</h5>
                                </div>
                    </div>
                </OwlCarousel>
                </Col>
                
            </Row>
        </Container>
    </div>
  );
}

export default TEAM;