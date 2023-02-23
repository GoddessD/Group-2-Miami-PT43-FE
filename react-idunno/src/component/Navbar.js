import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Home from '../pages/Home';



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img className="navbar-logo" src={`/IdunnoLogoBlk.png`} alt="image" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-names" id="navbarNav">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/generator">Generator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

          </div>
          <div className="button-container justify-content-end ">
            <ul>
              <Link to="/login">
                <button type="button" className="btn btn-primary">LOG IN</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-primary">SIGN UP</button>
              </Link>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
