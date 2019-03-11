import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const BlogTemplate = ({ pageContext: { data } }) => (
    <Layout>
        <Link to="/">Powrót do strony głównej</Link>
        <img src={data.image.url} alt="" />
        <h1>{data.title}</h1>
        <h2>{data.author.name}</h2>
        <p>{data.description}</p>
    </Layout>
)

export default BlogTemplate
