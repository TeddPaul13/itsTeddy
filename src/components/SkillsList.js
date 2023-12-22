import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function SkillsList() {
  return (
    <div className="skillsGrid">
      <div><h2>My Skills</h2></div>
      <div className="mb-3"><h5>I have experience with these technologies</h5></div>
      <Container>
        <Row xs={2} md={4} lg={6} className="mb-4">
          <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React Logo" title="React" />
          </Col>
          {/* <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML Logo" title="HTML" />
          </Col>
          <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS Logo" title="CSS3" />
          </Col> */}
          <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github Logo" title="GitHub" />
          </Col>
          <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node Logo" title="Node" />
          </Col>
          <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Node Logo" title="Node" />
          </Col>
        </Row>
        <Row xs={2} md={4} lg={6} className="mb-4">
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" title="Bootstrap" />
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git Logo" title="Git"/>
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySql Logo" title="MySql"/>
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" title="Express" />
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="MUI Logo" title="MUI"/>
            </Col>
            {/* <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack Logo" title="Slack"/>
            </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default SkillsList;
