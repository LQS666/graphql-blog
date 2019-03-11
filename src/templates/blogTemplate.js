import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import dateformat from "dateformat"
import styled from "styled-components"

const StyledSinglePost = styled.div`
    border-bottom: 1px solid #bdc3c7;
    margin-bottom: 15vh;
    padding: 5vh 0;
    position: relative;

    div {
        text-align: center;

        p:nth-child(1) {
            font-size: 13px;
        }

        p:nth-child(3) {
            color: #2980b9;
        }
    }

    h2 {
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
    }

    a {
        font-size: 16px;
        position: absolute;
        display: block;
        background: #3498db;
        color: #fff;
        transition: .3s;
        padding: 4px 30px;
        right: 0;
        bottom: 20px;
        border: 1px solid #fff;
        border-radius: 6px;

        &:hover {
            color: #2980b9;
            border: 1px solid #2980b9;
            background: #fff;
        }
    }
`

const BlogTemplate = ({ pageContext: { data } }) => (
    <Layout>
        <StyledSinglePost>
            <Link to="/proj/08/">Powrót do strony głównej</Link>
            <div>
                <p>{dateformat(data.createdAt, "longDate")}</p>
                <h2>{data.title}</h2>
                <p>{data.tags}</p>
            </div>
            <img src={data.image.url} alt="" />
            <p>{data.description}</p>
        </StyledSinglePost>
    </Layout>
)

export default BlogTemplate
