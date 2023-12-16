// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import '../styles/User-Navbar.css'; // You can keep your custom styles
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import search from '../assets/search-button.png';
import profile from '../assets/user.webp';

function AppUserNavbar() {
  return (
    <Navbar expand="lg" className="navbar-light shadow-sm p-3 mb-5 rounded navbar">
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} alt="Logo" className="logo ml-auto" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav"/>
      <Navbar.Collapse id="navbarNav">
        {/* <ul className='navbar__items--right'> */}
        <Nav className="ms-auto">
          <li className="nav-item search">
            <div className="input-group">
              <FormControl
                type="text"
                className="form-control search-bar"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text" id="basic-addon1">
                <img src={search} alt="Search Button" />
              </span>
            </div>
          </li>
          <li className="nav-item">
            <Button as={Link} to="/login" variant="primary">
              Log In
            </Button>
          </li>
          <li class="nav-item">
                <div class="profile">
                    <img src={profile} alt="User profile"/>
                </div>
            </li>
        </Nav>
        {/* </ul> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppUserNavbar;
