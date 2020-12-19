import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AboutPic from "../img/undraw_team_work_k80m.svg"

import "../styles/about.css"

export default function aboutComponent() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <img className="aboutPic" alt="About us" src={AboutPic} />
        </div>
        <Row className="text-center pb-4">
          <Col>
            <h5 className="h5Heading">About Us</h5>
            <h2 className="aboutHeading">The king of all virtual mail.</h2>
            <p className="pAbout">
              MailMoreLV is based out of Las Vegas, but we serve customers from
              all around the world. Our company has been providing premier
              virtual mailbox service since 2018. We have grown rapidly by
              keeping customers at the forefront of our business. Make your life
              easier by joining us today!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
