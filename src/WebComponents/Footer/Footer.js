import * as React from 'react';
//import '../../App.css';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Footer(){

    
    return(

        <footer >
        <div class="container" className='footerMenu'>
          <div class="row">
                   <div class="col-md-2 col-sm-6 col-xs-12">
                     <span class="logo">Yo Jobs</span>
                   </div>
                   
                   <div class="col-md-3 col-sm-6 col-xs-12">
                       <ul class="menu">
                            <span>Menu</span>    
                            <li>
                               <a href="#">Home</a>
                             </li>
                                  
                             <li>
                                <a href="#">IT Jobs</a>
                             </li>
                                  
                             <li>
                               <a href="#">2023 Job Openings</a>
                             </li>
                                  
                             <li>
                                <a href="#">Work from home jobs</a>
                             </li>
                        </ul>
                   </div>
              
                   <div class="col-md-3 col-sm-6 col-xs-12">
                     <ul class="address">
                       <span>Batches</span>       
                       <li>
                          <i class="fa fa-phone" aria-hidden="true"></i> 
                          <a href="#">2020</a>
                       </li>
                       <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i> 
                          <a href="#">2021</a>
                       </li> 
                       <li>
                          <i class="fa fa-envelope" aria-hidden="true"></i> 
                          <a href="#">2022</a>
                       </li>
                       <li>
                          <i class="fa fa-envelope" aria-hidden="true"></i> 
                          <a href="#">2023</a>
                       </li>  
                      </ul>
                   </div>
       
                   <div class="col-md-3 col-sm-6 col-xs-12">
                     <ul class="address">
                       <span>Contact</span>       
                       <li>
                          <i class="fa fa-phone" aria-hidden="true"></i> 
                          <a href="#">Phone</a>
                       </li>
                       <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i> 
                          <a href="#">Adress</a>
                       </li> 
                       <li>
                          <i class="fa fa-envelope" aria-hidden="true"></i> 
                          <a href="#">Email</a>
                       </li> 
                      </ul>
                   </div>
       
               </div> 
           </div>
       </footer>
    );
}

export default Footer;