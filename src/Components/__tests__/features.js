import React from "react"
import { render, screen } from "@testing-library/react"

import Features from "../features"

describe("The features component renders and the text is found", () => {
  beforeEach(() => {
    render(<Features />)
  })

  test("The features section text renders.", () => {
    expect(screen.getAllByRole("heading"))
  })

  test("The sign up button renders", () => {
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument()
  })
})
