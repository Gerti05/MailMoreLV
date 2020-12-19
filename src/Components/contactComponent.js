import React from "react"
import emailjs from "emailjs-com"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ContactPic from "../img/undraw_contract_uy56.svg"

import "../styles/contact.css"

export default function contactComponent() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_dlvr0hu",
        "template_7yopkfp",
        e.target,
        "user_XfxilZn7B9YfIGaDPhQHY"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div>
      <Container>
        <div className="text-center">
          <img className="contactPic" alt="Contact" src={ContactPic} />
        </div>
        <Row className="text-center pb-4">
          <Col>
            <h5 className="h5Heading">Contact</h5>
            <h2 className="contactHeading">
              Don't be shy, tell us what you think.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="text-center" name="contact" onSubmit={sendEmail}>
              <input type="hidden" name="form-name" value="contact" />
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Full Name"
                    type="text"
                    name="from_name"
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  name="message"
                  as="textarea"
                  rows="4"
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
