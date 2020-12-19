import React from "react"
import { render, screen } from "@testing-library/react"

import AboutComponent from "../aboutComponent"

describe("The about component renders", () => {
  beforeEach(() => {
    render(<AboutComponent />)
  })

  test("Image renders.", () => {
    expect(screen.getByRole("img", {name: "About us"})).toBeInTheDocument()
  })

  test("Text headings renders.", () => {
    expect(screen.getAllByRole("heading"))
  })
})
