import React from "react"
import Layout from "../Components/layout"
import _404Component from "../Components/_404Component"
import Seo from "../Components/seo"

export default function about() {
  return (
    <Layout>
      <Seo title="404" url="/404" />
      <_404Component />
    </Layout>
  )
}
