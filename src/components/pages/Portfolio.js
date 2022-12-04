import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import projects from "../projects";
import Work from "./Project";

function Portfolio() {
  return <Work projects={projects} />;
}

export default Portfolio;
