import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item hover-underline-animation">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item hover-underline-animation hov">
              <Link className="nav-link" to="/application">Application</Link>
            </li>
            <li className="nav-item hover-underline-animation">
              <Link className="nav-link" to="/Jobs">Jobs</Link>
            </li>
            <li className="nav-item hover-underline-animation">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
