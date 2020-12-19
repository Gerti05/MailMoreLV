import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NotFoundPic from "../img/undraw_page_not_found_su7k.svg"

import "../styles/404.css"

export default function _404Component() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <img className="_404Pic" alt="No Page Here" src={NotFoundPic} />
        </div>
        <Row className="text-center pb-4">
          <Col>
            <h5 className="h5Heading">Oops</h5>
            <h2 className="_404Heading">No page here.</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
