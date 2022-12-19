import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        {loading ? (
          <div className="container-fluid">
            <div className="spinner"></div>
          </div>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <span className="logo">
                <a className="lo1 navbar-brand">Clothes4Cause</a>
              </span>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact us
                    </a>
                  </li>
                </ul>
                <div className="mx-2">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#SignUpModal"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
