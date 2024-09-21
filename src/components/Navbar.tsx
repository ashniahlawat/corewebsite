import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#000", // Deep black background
        paddingLeft: "9%", // Padding for spacing
        paddingRight: "9%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
        marginBottom: "1%",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo"
            width="50px"
            style={{ marginLeft: "20px", marginTop: "4px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            {" "}
            {/* Margin start auto to push items to the right */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">
                  RESOURCES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/members">
                  THE TEAM
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li
                className="nav-item"
                id="contactlink"
                style={{
                  border: "0.7px solid white", // Thinner border
                  borderRadius: "30px", // More pronounced border radius
                  padding: "1px 1px",
                }}
              >
                <Link
                  className="nav-link"
                  id="contactlinktext"
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
