import React from "react"
import { render, screen } from "@testing-library/react"

import Heading from "../heading"

describe("The heading component renders", () => {
  beforeEach(() => {
    render(<Heading />)
  })

  test("Text above the form renders.", () => {
    expect(screen.getAllByRole("heading"))
  })

  test("The form renders with button, and login link", () => {
    expect(screen.getByRole("textbox", {name: ""})).toBeInTheDocument()
    expect(screen.getByRole("button", {name: "Submit"})).toBeInTheDocument()
    expect(screen.getByRole("link", {name: "Login"})).toBeInTheDocument()
  })

  test("Image renders.", () => {
    expect(screen.getByRole("img", {name: "Mail delivery on your phone"})).toBeInTheDocument()
  })
})
