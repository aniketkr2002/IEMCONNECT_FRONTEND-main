import React, { useState } from 'react';
import './navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
 
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="/home">IEM CONNECT</a>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="nav-item">
              <a className="nav-links" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="/senior">Senior</a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="/addProduct">Add Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="/myproduct">My Products</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
