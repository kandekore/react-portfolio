import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function NavTabsExample(currentPage, handlePageChange) {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <Nav.Item
            className="nav-item"
            style={{
              background: "#003366",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <Link
              onClick={() => handlePageChange("/about-me")}
              class={
                currentPage === "/about-me" ? "nav-link active" : "nav-link"
              }
              to="/about-me"
              style={{
                color: "#fff",
              }}
            >
              About Me
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              onClick={() => handlePageChange("Portfolio")}
              class={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              to="/portfolio"
            >
              Portfolio
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              onClick={() => handlePageChange("Contact")}
              class={currentPage === "Contact" ? "nav-link active" : "nav-link"}
              to="/contact"
            >
              Resume
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              onClick={() => handlePageChange("Contact")}
              class={currentPage === "Contact" ? "nav-link active" : "nav-link"}
              to="/contact"
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {/* <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  );
}

export default NavTabsExample;

// export default function Nav() {
//   const linkStyle = { border: "1px black", padding: "5px" };

//   return (
//     <nav className="navbar navbar-expand-lg bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link class="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link class="nav-link" to="/about-me">
//                 About Me
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link class="nav-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link class="nav-link" to="/portfolio">
//                 Portfolio
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
