
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";


function AdditionalSkills() {
  return (
    <div className="skillsGrid">
        <div className="mb-3"><h5>I am currently learning the following skills</h5></div>
      <Container>
        <Row xs={2} md={4} lg={6} className="mb-4">
          <Col className="mb-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" alt="Jira Logo" title="JIRA"/>
          </Col>
          <Col className="mb-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt="Gitlab Logo" title="GitLab"/>
          </Col>
          <Col className="mb-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" title="Figma"/>
          </Col>
          <Col className="mb-3">
            <img src= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" alt="Azure Logo" title="Azure"/>
          </Col>
          <Col className="mb-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" alt="Sequelize Logo" title="Sequelize"/>
          </Col>
         
        </Row>
        <div className="mb-3"><h5>I intend to learn these skills in the next 6 months</h5></div>
        <Row xs={2} md={4} lg={6} className="mb-4">
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python Logo" title="Python" />
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="Docker Logo" title="Docker" />
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" alt="Redis Logo" title="Redis"  />
            </Col>
            <Col className="mb-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux Logo" title="Redux"   />
            </Col>
        
        </Row>
      </Container>
    </div>
  )
}

export default AdditionalSkills