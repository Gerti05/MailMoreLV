import React from "react"
import Layout from "../Components/layout"
import AboutComponent from "../Components/aboutComponent"
import Seo from "../Components/seo"

export default function about() {
  return (
    <Layout>
      <Seo title="About" url="/about" />
      <AboutComponent />
    </Layout>
  )
}
