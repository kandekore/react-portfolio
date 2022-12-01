import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <Card style={{ marginTop: "20px", boxShadow: "5px 5px #003366" }}>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/assets/images/scar.jpg" />
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ marginTop: "20px", boxShadow: "5px 5px #003366" }}>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="../assets/images/scar.jpg" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Card style={{ marginTop: "20px", boxShadow: "5px 5px #003366" }}>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="../assets/images/scar.jpg" />
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ marginTop: "20px", boxShadow: "5px 5px #003366" }}>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="../assets/images/scar.jpg" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
