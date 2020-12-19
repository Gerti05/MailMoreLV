import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"

import "../styles/features.css"

export default function features() {
  return (
    <div id="features">
      <Container>
        <Row className="text-center">
          <Col xs={12} s={12} md={12} lg={12}>
            <h5 className="h5Heading">Features</h5>
            <h3 className="h3Heading pb-5">Smart mailbox management</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Notifications</h4>
            <p className="pb-5 pFeatures">
              Receive alerts anytime you get a new mail delivery.
            </p>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Security</h4>
            <p className="pb-5 pFeatures">
              We take every precaution to keep your mail safe and secure.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Open & Scan</h4>
            <p className="pb-5 pFeatures">
              See the contents of your mail directly on your phone.
            </p>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Forwarding</h4>
            <p className="pb-5 pFeatures">
              Chose which mail you want and we will forward it anywhere in the
              world.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Shredding</h4>
            <p className="pb-5 pFeatures">
              Shredding service for any of your sensitive material.
            </p>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <h4 className="h4Heading pb-3">Recipients</h4>
            <p className="pb-5 pFeatures">Have as many as 5 recipients per mailbox.</p>
          </Col>
        </Row>
        <Row className="text-center d-lg-none">
          <Col xs={12} s={12} md={12}>
          <Link
              target="_blank"
              to="https://mailmorelv.anytimemailbox.com/signup"
            >
              <Button variant="primary" size="md">
                Sign Up
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
