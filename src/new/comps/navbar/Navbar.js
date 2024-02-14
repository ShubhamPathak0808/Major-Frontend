import React, { Component } from "react";
import "./Navbar.css";
import { navbar_items } from "../helpers/Data";
import { navbar_accounts } from "../helpers/Data";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

class Navbar extends Component {
  display_navbar_items = (_) => {
    let items = navbar_items.map((item) => {
      return (
        <li className="nav-item link" key={Math.random()}>
          <a
            className="nav-link p-md-0 py-md-1 px-md-2 me-md-2"
            href={`#${item.link}`}
          >
            <i className={`${item.icon} me-2`}></i>
            {item.name}
          </a>
        </li>
      );
    });
    return items;
  };

  display_navbar_accounts = (_) => {
    let accounts = navbar_accounts.map((item) => {
      return (
        <li className="nav-item px-1 icon" key={Math.random()}>
          <a
            className="nav-link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className={item.icon}></i>
          </a>
        </li>
      );
    });
    return accounts;
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-md sticky-top cg active py-1 mb-5"
        id="navbar"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">Ξ</span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {this.display_navbar_items()}
            </ul>
            <ul className="navbar-nav ml-auto">
              {/* {this.display_navbar_accounts()} */}
              {/* <Link className="nav-item  nav-new nav-link"
                to={{
                  pathname: `/getStarted`,
                }}
              > */}
              {/* Get Started */}
              {/* </Link> */}
              <li className="nav-item px-1 icon">
                {/* <Link className="nav-link nav-new" to='/getStarted'>

                  Get Started
                  <ArrowRight
                    size={15}
                    // color="black"
                    style={{ marginLeft: "0.5rem", marginBottom: "0.2rem" }}
                  />
                </Link> */}
              </li>
            </ul>
          </div>
          <Link className="nav-link nav-new" to='/getStarted'>

            Get Started
            <ArrowRight
              size={15}
              // color="black"
              style={{ marginLeft: "0.5rem", marginBottom: "0.2rem" }}
            />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
