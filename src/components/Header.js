import React, { useState } from "react";

import Nav from "./Nav";
import Row from "react-bootstrap/Row";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderTitle = () => {
    if (currentPage === "About") {
      return "About";
    }
    if (currentPage === "Portfolio") {
      return "Portfolio";
    }
    if (currentPage === "Contact") {
      return "Contact";
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Row className="title">
        <h1>{renderTitle()}</h1>
        <p>Full Stack Developer</p>
      </Row>
    </div>
  );
}
