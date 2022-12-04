import React, { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Row from "react-bootstrap/Row";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

function Navbar() {
  let location = useLocation();

  if (location.pathname === "/" || location.pathname === "/about-me") {
    return (
      <>
        <h1 className="headermain">Darrens' Profile</h1>
        <p className="headersub">Full Stack Developer & WordPress Expert</p>
      </>
    );
  } else if (location.pathname === "/portfolio") {
    return (
      <>
        <h1 className="headermain">Darrens' Work</h1>
        <p className="headersub">A few projects and applications</p>
      </>
    );
  } else if (location.pathname === "/resume") {
    return (
      <>
        <h1 className="headermain">Darrens' CV</h1>
        <p className="headersub">Click to download my CV</p>
      </>
    );
  } else if (location.pathname === "/contact") {
    return (
      <>
        <h1 className="headermain">Get in touch</h1>
      </>
    );
  }
}

export default function Header() {
  return (
    <div>
      <Nav />
      <Row className="title">{Navbar()}</Row>
    </div>
  );
}
