import React from "react"
import Layout from "../Components/layout"
import ContactComponent from "../Components/contactComponent"
import Seo from "../Components/seo"

export default function contact() {
  return (
    <Layout>
      <Seo title="Contact" url="/contact" />
      <ContactComponent />
    </Layout>
  )
}
