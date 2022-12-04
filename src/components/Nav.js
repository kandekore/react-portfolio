import React from "react";

import "../App.css";

import Nav from "react-bootstrap/Nav";

function NavTabsExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="#/about-me">
      <Nav.Item>
        <Nav.Link href="#/about-me" className={"about"}>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/portfolio" eventKey="link-1">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/resume" eventKey="link-2">
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/contact" eventKey="link-3">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabsExample;
