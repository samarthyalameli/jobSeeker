import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './WebComponents/Home'
import reportWebVitals from './reportWebVitals';
import './assets/css/base.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Jobdetails from './WebComponents/Jobdetails'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

<BrowserRouter> 
  <Routes>    
     <Route path="/" element={ <Home /> }/> 
     {/* The next line is very important for the Navigate component to work */} 
      <Route path="/jobdetails" element={ <Jobdetails /> } />   
       </Routes>  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
