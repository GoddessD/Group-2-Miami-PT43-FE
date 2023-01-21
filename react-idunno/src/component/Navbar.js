import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import {Link}from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <nav className="me-auto ">
        <div className="left-container">
        <Link to="/home">Home</Link>
        <Link to="/register"> About Us</Link>
        <Link to="/register">Generator</Link>
        <Link to="/register"> Contact Us</Link>
        </div>
        <div className='center-container'>
          <h1>Welcome to My Website!</h1>
          <p>Learn more about our products and services.</p>
        </div>
        <div className="right-container">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </div>
  );
};
export default NavBar;
