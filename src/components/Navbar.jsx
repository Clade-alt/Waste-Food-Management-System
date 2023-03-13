import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <a className=" navbar-brand fw-bolder fs-4 mx-auto">WASTE FOOD MANAGEMENT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus"> About Us </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/service"> Services </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contactus"> Contact Us </NavLink>
              </li>
            </ul>
            <button className="btn btn-secondary ms-auto px-4 rounded-pill">
              <i className="fa fa-sign-in me-2"></i>Login</button>
            <button className="btn btn-outline-secondary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;