import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona Główna" keywords={[`gatsby`, `application`, `blog`]} />
    <h1>To działa!</h1>
    <Posts />
  </Layout>
)

export default IndexPage
