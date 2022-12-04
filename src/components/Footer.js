import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container className="footer">
      <Row className="footerrow">
        <Col sm>
          <div className="footercol">
            <a href="https://github.com/kandekore">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
        <Col sm>
          <div className="footercol">
            <a href="https://www.linkedin.com/in/dkandekore/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
        <Col sm>
          <div className="footercol">
            <a href="https://stackoverflow.com/users/20583910/kandekore">
              <i
                className="fa fa-stack-overflow"
                aria-hidden="true"
                target="_blank"
                rel="noopener noreferrer"
              ></i>
            </a>
          </div>
        </Col>
        <Col sm className="lastfoot">
          <div className="footercol">
            <a href="mailto:darren@kandekore.net">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
