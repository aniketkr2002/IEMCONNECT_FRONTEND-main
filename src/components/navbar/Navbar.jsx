import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">IEM-CONNECT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/contact">contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/senior">senior</a>
          </li>
           <li class="nav-item">
             <a class="nav-link" href="/blog">blog</a>
           </li>
          <li class="nav-item">
            <a class="nav-link disabled">about</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
