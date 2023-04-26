import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand  text-white" to="/">
            NewsAggregator
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3  text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link  text-white" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link  text-white" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-3 text-white">
                <Link className="nav-link  text-white" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link  text-white" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link  text-white" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-3 ">
                <Link className="nav-link  text-white" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
