import React from "react"
import { render, screen } from "@testing-library/react"

import Navbar from "../navbar"

describe("Navbar and all its components render and are clickable", () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  test("Logo link renders", () => {
    expect(screen.getByRole("link", { name: "MailMoreLV" })).toBeInTheDocument()
  })

  test("Features link renders", () => {
    expect(screen.getByRole("link", { name: "Features" })).toBeInTheDocument()
  })

  test("About Us link renders", () => {
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument()
  })

  test("Contact link renders", () => {
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument()
  })

  test("The sign up button renders", () => {
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument()
  })

  test("The toggle button renders", () => {
    expect(
      screen.getByRole("button", { name: "Toggle navigation" })
    ).toBeInTheDocument()
  })
})
