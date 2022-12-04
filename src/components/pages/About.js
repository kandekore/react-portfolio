import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function HeaderAndFooterExample() {
  return (
    <Container className="mainbody">
      <Row>
        <Card
          style={{
            marginTop: "20px",
            width: "90%",
            marginLeft: "5%",
            boxShadow: "5px 5px #003366",
          }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <Card.Img
                style={{ width: "100%" }}
                src="/react-portfolio/assets/images/darren10k.JPG"
              />
            </div>
            <div class="col-md-8">
              <Card.Body style={{ background: "#f7f7f7" }}>
                {/* <Card.Title>Darren Kandekore</Card.Title> */}

                <Tabs
                  style={{ marginBottom: "0px" }}
                  defaultActiveKey="profile"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab className="profile" eventKey="profile" title="Overview">
                    <p style={{ textAlign: "justify" }}>
                      I am a driven, dedicated, and innovative individual with a
                      passion for creating and managing web applications and
                      services. I started my career in sales, and in the late
                      90’s / early 00’s worked for Informatics CTEC selling
                      Microsoft and Cisco training courses before spending 7
                      years selling Yell.com products for Yell Group / Hibu.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      After teaching myself HTML and Search engine Optimisation,
                      in 2009 I became self employed offering website design and
                      Search Engine Marketing services to small businesses and
                      created ‘scrapacarforcash.co.uk’ a lead generation website
                      for scrap car and salvage businesses, this project was
                      very successful and is running right up until the present
                      day.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      My Portfolio of clients enabled me to start my own hosting
                      platform, offering website hosting & email services
                      including Exchange & Microsoft 365.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      A keen runner, I recently raised £900 for Acorns Childrens
                      Hospice by taking part in the Great Birmingham Run, I am
                      an Aston Villa season ticket holder and enjoy listening to
                      music and going to the gym.
                    </p>
                  </Tab>
                  <Tab eventKey="experience" title="Experience">
                    <div class="row g-0">
                      {" "}
                      <div class="col-md-6">
                        {" "}
                        <ListGroup>
                          <ListGroup.Item>WordPress (advanced)</ListGroup.Item>
                          <ListGroup.Item>HTML</ListGroup.Item>
                          <ListGroup.Item>CSS</ListGroup.Item>
                          <ListGroup.Item>
                            Hosting Management WHM & cPanel
                          </ListGroup.Item>
                          {/* <ul><li>SSL Installation</ListGroup.Item> */}
                          <ListGroup.Item>DNS Administration</ListGroup.Item>
                          <ListGroup.Item>Email Administration</ListGroup.Item>
                          <ListGroup.Item>FTP</ListGroup.Item>
                          <ListGroup.Item>
                            Domain Name Registration & Management
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Hosted Exchange Management
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div class="col-md-6">
                        {" "}
                        <ListGroup>
                          <ListGroup.Item>
                            Microsoft 365 Administration and Support
                          </ListGroup.Item>
                          <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                          <ListGroup.Item>
                            Search Engine Optimisation
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Google Analytics & Webmaster Tools
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Google AdWords (AdWords certified)
                          </ListGroup.Item>
                          <ListGroup.Item>Bing Ads</ListGroup.Item>
                          {/* I have some experience with the following
  PHP */}
                          <ListGroup.Item>SQL </ListGroup.Item>
                          <ListGroup.Item>Joomla </ListGroup.Item>
                          <ListGroup.Item>Magento </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Row>
    </Container>
  );
}

export default HeaderAndFooterExample;
