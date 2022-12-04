import React from "react";
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
                      I have completed the 'University of Birmingham Coding
                      Bootcamp' to enhance my skills and build on my working
                      experience.
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
                      <div class="col-md-6">
                        <ListGroup>
                          <ListGroup.Item>JavaScript</ListGroup.Item>
                          <ListGroup.Item>React</ListGroup.Item>
                          <ListGroup.Item>HTML & CSS</ListGroup.Item>
                          <ListGroup.Item>
                            Web, Third Party & Server-Side APIs
                          </ListGroup.Item>
                          <ListGroup.Item>Node.js</ListGroup.Item>
                          <ListGroup.Item>
                            Object-Oriented Programming(OOP)
                          </ListGroup.Item>
                          <ListGroup.Item>Express.js</ListGroup.Item>

                          <ListGroup.Item>
                            SQL, MongoDB & GraphQL
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Object-Relational Mapping (ORM)
                          </ListGroup.Item>

                          <ListGroup.Item>
                            Model-View-Controller (MVC)
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div class="col-md-6">
                        <ListGroup>
                          <ListGroup.Item>
                            Hosting Management WHM & cPanel
                          </ListGroup.Item>
                          <ListGroup.Item>
                            DNS Administration & Domain Management
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Microsoft Exchange Administration and Support
                          </ListGroup.Item>
                          <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                          <ListGroup.Item>
                            Search Engine Optimisation
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Google Analytics & Webmaster Tools
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Google AdWords & Bing Ads (AdWords certified)
                          </ListGroup.Item>

                          <ListGroup.Item>WordPress </ListGroup.Item>
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
