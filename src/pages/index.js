import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona Główna" keywords={[`gatsby`, `application`, `blog`]} />
    <h1>To działa!</h1>
  </Layout>
)

export default IndexPage
