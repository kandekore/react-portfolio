import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Work({ projects }) {
  return (
    <Container className="mainbody">
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, idx) => (
          <Col className="d-flex">
            <Card className="flex-fill" key={project.head.title}>
              <Card.Img variant="top" src={project.head.image} />
              <Card.Body>
                <Card.Title className="projtit">
                  {project.head.title}
                </Card.Title>

                <Card.Text>{project.head.description}</Card.Text>
                <Card.Text>
                  <strong>Technologies:</strong> {project.tech}
                </Card.Text>
                <Card.Text>
                  <strong> GitHub: </strong>
                  <a href={project.links.github}> {project.links.github}</a>
                </Card.Text>
                <Card.Text>
                  <strong>Deployed: </strong>
                  <a href={project.links.deployed}>{project.links.deployed}</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
