import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function SkillsList() {
  return (
    <div className="skillsGrid">
      <Container>
        <Row xs={2} md={4} lg={6} className="mb-4">
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React Logo" title="React" />
          </Col>
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML Logo" title="HTML" />
          </Col>
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS Logo" title="CSS3" />
          </Col>
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github Logo" title="GitHub" />
          </Col>
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node Logo" title="Node" />
          </Col>
          <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Node Logo" title="Node" />
          </Col>
        </Row>
        <Row xs={2} md={4} lg={6} className="mb-4">
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" title="Bootstrap" />
            </Col>
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git Logo" title="Git"/>
            </Col>
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySql Logo" title="MySql"/>
            </Col>
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" title="Express" />
            </Col>
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="MUI Logo" title="MUI"/>
            </Col>
            <Col>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" title="Figma"/>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsList;
