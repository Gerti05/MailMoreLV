import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "../styles/navbar.css"

export default function MailMoreNavbar() {
  // useState gets initial value from localStorage.
  // The first time the site loads, useState defaults to false, because localStorage initializes to 0.
  const [scrollState, setScrollState] = useState(() => {
    if (window) {
      const localData = localStorage.getItem("scrollState")
      JSON.parse(localData)

      return localData >= 1 ? true : false
    } else {
      return false
    }
  })

  // useEffect runs every render, and localStorage updates anytime user scrolls.
  // localStorage saves scrolled value incase user refreshes page.
  // While user scrolls page, setScrollState updates useState value.
  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.documentElement.scrollTop
      window.localStorage.setItem("scrollState", JSON.stringify(scrolled))

      if (scrolled >= 1) {
        setScrollState(true)
      } else {
        setScrollState(false)
      }
    })
  }, [scrollState])

  // Navbar that updates background color when user scrolls down the page.
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
