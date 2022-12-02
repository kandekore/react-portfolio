import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function NavTabsExample(currentPage, handlePageChange) {
  return (
    <Nav justify variant="tabs" defaultActiveKey="#/about-me">
      <Nav.Item>
        <Nav.Link
          onClick={() => handlePageChange("About")}
          href="#/about-me"
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => handlePageChange("Portfolio")}
          href="#/portfolio"
          eventKey="link-1"
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => handlePageChange("Resume")}
          href="#/resume"
          eventKey="link-2"
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => handlePageChange("Contact")}
          href="#/contact"
          eventKey="link-3"
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
    // <Card>
    //   <Card.Header>
    //     <Nav variant="tabs" defaultActiveKey="#first">
    //       <a className="navbar-brand" href="#">
    //         Navbar
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <Nav.Item
    //         className="nav-item"
    //         style={{
    //           background: "#003366",
    //           borderRadius: "20px 20px 0px 0px",
    //         }}
    //       >
    //         <Link
    //           onClick={() => handlePageChange("/about-me")}
    //           class={
    //             currentPage === "/about-me"
    //           }
    //           to="/about-me"
    //           style={{
    //             color: "#fff",
    //           }}
    //         >
    //           About Me
    //         </Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Link
    //           onClick={() => handlePageChange("Portfolio")}
    //           class={
    //             currentPage === "Portfolio"
    //           }
    //           to="/portfolio"
    //         >
    //           Portfolio
    //         </Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Link
    //           onClick={() => handlePageChange("Contact")}
    //           class={currentPage === "Contact" }
    //           to="/contact"
    //         >
    //           Resume
    //         </Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Link
    //           onClick={() => handlePageChange("Contact")}
    //           class={currentPage === "Contact" }
    //           to="/contact"
    //         >
    //           Contact
    //         </Link>
    //       </Nav.Item>
    //     </Nav>
    //   </Card.Header>

    // </Card>
  );
}

export default NavTabsExample;
