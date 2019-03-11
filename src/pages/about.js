import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="O mnie" />
    <About />
  </Layout>
)

export default AboutPage
