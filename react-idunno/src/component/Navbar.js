import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import {Link}from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <nav className="me-auto">
        <Link to="/home">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link to="/generator">Generate</Link>
      </nav>
    </div>
  );
};
export default NavBar;
