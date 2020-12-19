import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import MailPic from "../img/undraw_mail_2_tqip.svg"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Link } from "gatsby"

import "../styles/heading.css"

export default function Heading() {
  const [emailState, setEmailState] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    addToMailchimp(emailState)
    e.target.reset()
  }

  function handleChange(event) {
    setEmailState(event.target.value)
  }

  return (
    <div className="bgColor">
      <Container>
        <Row>
          <Col xs={12} s={12} md={12} lg={6}>
            <div>
              <h5 className="h5Heading">Virtual Mailbox</h5>
              <h1 className="h1Heading">
                All your mail in one convenient place.
              </h1>
              <h2 className="h2Heading">
                We manage all personal or business mail. Sign up for special
                offers.
              </h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formHorizontalEmail">
                <Form.Control
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                />
              </Form.Group>
              <Button block type="submit">
                Submit
              </Button>
            </Form>
            <span className="headingSubtitle">
              Already have an account?{" "}
              <Link
                className="subtitleLink ml-1"
                target="_blank"
                to="https://mailmorelv.anytimemailbox.com/"
              >
                Login
              </Link>
            </span>
          </Col>
          <Col className="d-none d-lg-block" lg={6}>
            <img
              className="phoneMailPic"
              alt="Mail delivery on your phone"
              src={MailPic}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
