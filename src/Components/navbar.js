import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "../styles/navbar.css"

export default function MailMoreNavbar() {
  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.documentElement.scrollTop
      if (scrolled >= 1) {
        setScrollState(true)
      } else {
        setScrollState(false)
      }
    })
  })

  return (
    <Navbar
      fixed="top"
      className={scrollState ? "scrolled  pt-1" : "notScrolled pt-1"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <Link className="logo" to="/">
            MailMoreLV
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <AnchorLink className="features" to="/#features">
              Features
            </AnchorLink>
            <Link className="aboutUs" to="/about">
              About Us
            </Link>
            <Link className="contact" to="/contact">
              Contact
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link
              target="_blank"
              to="https://mailmorelv.anytimemailbox.com/signup"
            >
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
