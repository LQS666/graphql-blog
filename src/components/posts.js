import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import dateformat from "dateformat"
import styled from "styled-components"

const StyledPost = styled.div`
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

const Posts = () => (
    <StaticQuery
        query={graphql`
        {
            awesomeblog {
                posts(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
                    id
                    title
                    image {
                        url
                    }
                    description
                    tags
                    author {
                        id
                        name
                    }
                    date
                    createdAt
                    slug
                }
            }
        }
      `}
        render={({ awesomeblog: { posts } }) => (
            <>
                {
                    posts.map((post, i) => (
                        <StyledPost key={i}>
                            <div>
                                <p>{dateformat(post.createdAt, "longDate")}</p>
                                <h2>{post.title}</h2>
                                <p>{post.tags}</p>
                            </div>
                            <img src={post.image.url} alt="" />
                            <p>{post.description}</p>
                            <a href={post.slug}>Zobacz więcej</a>
                        </StyledPost>
                    ))
                }
            </>
        )}
    />
)
export default Posts