import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";

export default function Navbar() {
  let location = useLocation();
  const { isAuthorised, Logout } = useContext(Authcontext);

  const handleLogout = () => {
    Logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NoteHive
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

      
          {isAuthorised && (
            <button
              className="btn btn-primary ms-auto p-2"
              type="button"
              onClick={handleLogout}
              
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
