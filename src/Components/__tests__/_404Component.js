import React from "react"
import { render, screen } from "@testing-library/react"

import _404Component from "../_404Component"

describe("The 404 component renders", () => {
  beforeEach(() => {
    render(<_404Component />)
  })

  test("Image renders.", () => {
    expect(screen.getByRole("img", {name: "No Page Here"})).toBeInTheDocument()
  })

  test("Text headings renders.", () => {
    expect(screen.getAllByRole("heading"))
  })
})
