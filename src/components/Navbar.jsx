import React , { useState } from "react";

import "./Navbar.css";
import { NavLink , Link } from "react-router-dom";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/">
        <img
            src={require("../images/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img></Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/bookingform">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
      </ul>
    </nav>
  );
};
