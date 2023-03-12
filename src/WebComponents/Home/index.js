//import logo from '../../logo.svg';
import tcs from '../../assets/company_logos/TCS.png';
import wipro from '../../assets/company_logos/Wipro.png';
import infosys from '../../assets/company_logos/Infosys.png';
import * as React from 'react';
//import '../../App.css';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, Button} from 'react-bootstrap';
//import  logo12  from './job1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { youtube, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
import AppNav from '../AppNav/AppNav';
import Footer from '../Footer/Footer';

import { useNavigate } from 'react-router-dom';





function Home() {


  const navigate = useNavigate();

  
  return (
//  
<>
<AppNav />
{/* <Navbar collapseOnSelect expand="lg"  className="navBar">


      
<Navbar.Brand href="#home" >
   
              <h className='navBarHeading'>YoJobs</h></Navbar.Brand>
      <Container >
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Fresher Jobs</Nav.Link>
            <NavDropdown title="Jobs" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/jobdetails')}>Tcs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Infosys
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wipro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                About us
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Batches" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">2022</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2021
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2021</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                2020
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                
                
          </Nav>
         
        </Navbar.Collapse>
        </Container>
    </Navbar> */}

    <Container fluid>
      <Row className='highlighted_content'>
      <h className='headingContent'>100% Job Gauranteed</h>
        <Col className='highlighted_content_text'>Looking for <b>Software Jobs 2023</b>? then refer to this page. And there is a whole IT Industry waiting for you to select into their organisation. We are sure that the current page covers all the latest IT <b>Job Openings 2023</b>.Have you completed Graduation and Post Graduation? then take a look at this IT Jobs 2023 in India Page. As per the latest news, there is an immense of Job Openings in MNC Companies. A hefty number of people are eagerly looking for IT Jobs. For those hunters, we are specially designed on this page. In the above section, we have listed the company wise IT Job Openings in India. We all know that there are many types of jobs in It Sector. The competition for IT Jobs is pretty high so those who have completed their graduation from any stream can check this post.</Col>
      </Row>
    </Container>


<Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'><div class="row">
    <div class="col-3">
  <img class="card-img-top" src={tcs} alt="Card image cap"  className='companyLogos' /></div>
  <div class="col-6"><div class="card-body">
    <h3 class="card-title">TCS</h3>
    <p class="card-text"><ul>
        <li><b>Job Role:</b> Associate Business Analyst (DMO)</li>
        <li><b>Eligibility:</b>  A graduate belonging to a relevant field</li>
        <li><b>Experience:</b> Fresher</li>
        <li><b>Location:</b> India, MH, Pune</li>
</ul></p>
<p class="card-text">
<h><b>Required Skills:</b> </h>
<ul>
<li>Excellent communication skills</li>
<li>Good Communication Skills, Excel Skills, Team Player</li>
<li>Aggressive about meeting goals & timelines, A Multi-tasking person</li>
<li>Understand data sources, retrieving and analyzing data.</li>
<li>Comfortable working with Excel and Powerpoint</li>
</ul>
</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div></div>
  </div>
</div>
</Container>

<Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'>
      <div class="row">
    <div class="col-3">
  <img class="card-img-top" src={wipro} alt="Card image cap"  className='companyLogos' /></div>
  <div class="col-6"><div class="card-body">
    <h3 class="card-title">Wipro</h3>
    <p class="card-text"><ul>
        <li><b>Job Role:</b> Associate Business Analyst (DMO)</li>
        <li><b>Eligibility:</b>  A graduate belonging to a relevant field</li>
        <li><b>Experience:</b> Fresher</li>
        <li><b>Location:</b> India, MH, Pune</li>
</ul></p>
<p class="card-text">
<h><b>Required Skills:</b> </h>
<ul>
<li>Excellent communication skills</li>
<li>Good Communication Skills, Excel Skills, Team Player</li>
<li>Aggressive about meeting goals & timelines, A Multi-tasking person</li>
<li>Understand data sources, retrieving and analyzing data.</li>
<li>Comfortable working with Excel and Powerpoint</li>
</ul>
</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div></div>
  </div>
</div>
</Container>

<Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'><div class="row">
    <div class="col-3">
  <img class="card-img-top" src={infosys} alt="Card image cap"  className='companyLogos' /></div>
  <div class="col-6"><div class="card-body">
    <h3 class="card-title">Infosys</h3>
    <p class="card-text"><ul>
        <li><b>Job Role:</b> Associate Business Analyst (DMO)</li>
        <li><b>Eligibility:</b>  A graduate belonging to a relevant field</li>
        <li><b>Experience:</b> Fresher</li>
        <li><b>Location:</b> India, MH, Pune</li>
</ul></p>
<p class="card-text">
<h><b>Required Skills:</b> </h>
<ul>
<li>Excellent communication skills</li>
<li>Good Communication Skills, Excel Skills, Team Player</li>
<li>Aggressive about meeting goals & timelines, A Multi-tasking person</li>
<li>Understand data sources, retrieving and analyzing data.</li>
<li>Comfortable working with Excel and Powerpoint</li>
</ul>
</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div></div>
  </div>
</div>
</Container>



<div class="search-text"> 
   <div class="container">
     <div class="row text-center">
     
       <div class="form">
           <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <form id="search-form" class="form-search form-horizontal">
                <input type="text" class="input-search" placeholder="Email Address" />
                <button type="submit" class="btn-search">SUBMIT</button>
            </form>
        </div>
    
      </div>         
   </div>     
</div>

<Footer />
    </>
    
  );
}



export default Home;
