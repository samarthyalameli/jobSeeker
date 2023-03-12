
import AppNav from './AppNav/AppNav';
import Footer from './Footer/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tcs from '../assets/company_logos/TCS.png';

function Jobdetails(){

    return(
        <>
        <AppNav />
        <Container fluid>
      <Row className='Jobhighlighted_content'>
      <h className='JobheadingContent'>TCS 2023 Job details</h>
      <div  className='JobDcompanyLogos'><img class="card-img-top" src={tcs} alt="Card image cap" className='JobDcompanyLogos' /></div>
        <Col className='Jobhighlighted_content_text'>TCS Recruitment 2023 for 2023, 2022, 2021 Batch Freshers | Careers Page Link at tcs.com: Good news for the candidates who are exploring TCS jobs in India (Bangalore, Hyderabad, Chennai, Mumbai, Pune, Noida, Gurgaon, Kolkata, Cochin, Ahmedabad, Bhopal, Bhubaneshwar, etc). The Tata Consultancy Services has disclosed the latest employment advertisement about the TCS Recruitment 2023 @ TCS official website i.e. tcs.com.</Col>
      </Row>

      <Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'>

    <h3 class="card-title" className="JobExamTitle">TCS NQT Description</h3>
    <p class="card-text">
    TCS National Qualifier Test (TCS NQT) helps you prove your skills to top Corporates. You may choose to get assessed on aptitude skills, domain specific skills, industry knowledge or work values. The tests are scheduled every quarter and can be taken from home or at our exam centres. Your NQT Scorecard will showcase your performance in every section of the test. You can apply for jobs in various Corporates that accept NQT Score, on our website and respective Corporates' websites
        {/* <ul>
        <li><b>Job Role:</b> Associate Business Analyst (DMO)</li>
        <li><b>Eligibility:</b>  A graduate belonging to a relevant field</li>
        <li><b>Experience:</b> Fresher</li>
        <li><b>Location:</b> India, MH, Pune</li>
</ul> */}

</p>
    </div>
    
    </Container>

    <Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'>

    <h3 class="card-title" className="JobElgibililtyTitle">Eligibility Criteria</h3>
    <p class="card-text">
     <ul>
        <li><b>Company:</b> TCS</li>
        <li><b>Age Limit:</b>  Minimum of 18 years and a maximum of 28 years.</li>
        <li><b>Percentage Criteria:</b> An applicant must have a minimum of 60% or 6 CGPA throughout academics and an aggregate of 60% or 6.00 CGPA in the highest qualification till the semester for which results have been declared.</li>
        <li><b>Backlog:</b>  An applicant must not have more than 1 active backlog at the time of the TCS NQT examination.</li>
        <li><b>B.E./ B.Tech:</b> <li> Should have 60% above in 10th</li>
        <li>Should have 60% above in 12th</li>
        <li>Should have 60% above in Graduation</li>
        <li>Plus point if a certification in Several Programming Language is there.</li></li>
        <li><b>M.E./ M.Tech:</b> <li> Should have 60% above in 10th</li>
        <li>Should have 60% above in 12th</li>
        <li>Should have 60% above in Graduation</li>
        <li>No Current Backlog.</li></li>

</ul>

</p>
    </div>
    
    </Container>

    <Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'>

    <h3 class="card-title" className="JobExamTitle">About TCS Company</h3>
    <p class="card-text">
    
TCS is also known as Tata Consultancy Services Limited. TCS Limited was founded in 1968 by a division of Tata Sons Limited. is an Indian multinational information technology (IT) service, consulting, and business solutions company Headquartered in Mumbai, Maharashtra? It is a subsidiary of the Tata Group and operates in 46 countries. TCS has the ability to deliver high–quality services and solutions. TCS is an MNC Company that is now placed the most valuable IT Services Brand worldwide. It is the 9th largest IT services provider by revenue and ranked as 64th overall in the Forbes World’s Most Innovative Companies ranking, making it both the highest-ranked IT services company and the top Indian company. TCS has become a Publicly Listed Company on 25th August 2015. In December 2015 the TCS is ranked 10th on the Fortune India 500 list.

</p>
    </div>
    
    </Container>

    
    <Container className='jobCards'>
    <div class="card mb-3" className='cardDesign'>

    <h3 class="card-title" className="JobElgibililtyTitle">STeps to apply NQT</h3>
    <p class="card-text">
     <ul>
     <li><b>Step 1: </b>Apply to TCS NQT and appear for the Test</li>
     <li><b>Step 2:</b> Get your NQT Score</li>
     <li><b>Step 3:</b> Apply to multiple jobs on our website</li>
        <li><b>Step 3:</b> Apply for jobs on other Corporates’ websites too</li>
        <li><b>Step 5:</b>  Get jobs basis your NQT Score and suitability</li>
       
        

</ul>

</p>
    </div>
    
    </Container>
    </Container>
    <Footer />
    </>
    );
}
export default Jobdetails;