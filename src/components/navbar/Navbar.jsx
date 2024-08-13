import React, { useState } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar-light">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>IEM CONNECT</span>
        </Link>
      </div>
      <div className="center">
        <Link to="/">Study Material</Link>
        <Link to="/">Post</Link>
        <Link to="/">About</Link>
      </div>
      <div className="right">
        <div className="user" onClick={() => setDropdownOpen((prev) => !prev)}>
          <img src="/noavatar.jpg" alt="profile" />
          <span>John Doe</span>
          <div className={dropdownOpen ? "dropdown active" : "dropdown"}>
            <Link to="/profile">My Profile</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/my">My Products</Link>
            <Link to="/my-ratings">My Rating</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Study Material</Link>
          <Link to="/">Post</Link>
          <Link to="/">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
