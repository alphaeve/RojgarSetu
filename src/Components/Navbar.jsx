import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo on the left side */}
        <Link className="navbar-brand border-radius-50%" to="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        {/* Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/application">Application</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/Jobs">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/about">Graph</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
