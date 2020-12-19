import React from "react"
import { render, screen } from "@testing-library/react"

import ContactComponent from "../contactComponent"

describe("The contact component renders", () => {
  beforeEach(() => {
    render(<ContactComponent />)
  })

  test("Image renders", () => {
    expect(screen.getByRole("img", {name: "Contact"})).toBeInTheDocument()
  })

  test("Text headings renders", () => {
    expect(screen.getAllByRole("heading"))
  })

  test("The form renders with submit button", () => {
    expect(screen.getAllByRole("textbox", {name: ""}))
    expect(screen.getByRole("button", {name: "Submit"})).toBeInTheDocument()
  })
})
