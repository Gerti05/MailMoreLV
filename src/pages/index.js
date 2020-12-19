import React from "react"
import Heading from "../Components/heading"
import Layout from "../Components/layout"
import Features from "../Components/features"
import Seo from "../Components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

export default function index() {
  return (
    <Layout>
      <Seo title="Home" />
      <Heading />
      <Features />
    </Layout>
  )
}
