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
import { useNavigate } from 'react-router-dom';


function AppNav(){

    const navigate = useNavigate();
    return(

        <Navbar collapseOnSelect expand="lg"  className="navBar">


      
<Navbar.Brand href="#home" >
    {/* <img
                className="appBar"
                src={
                  logo12
                }
                alt="Logo"
              /> */}
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
          {/* <Nav><div><a><FontAwesomeIcon icon={youtube} color="blue" /></a></div></Nav> */}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default AppNav;