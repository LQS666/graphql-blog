import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import dateformat from "dateformat"



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
                        <div key={i}>
                            <img src={post.image.url} alt="" />
                            <p>{dateformat(post.createdAt, "longDate")}</p>
                            <p>{post.title}</p>
                            <p>{post.description}</p>
                            <p>{post.author.name}</p>
                            <p>{post.tags}</p>
                            <a href={post.slug}>Zobacz więcej</a>
                        </div>
                    ))
                }
            </>
        )}
    />
)
export default Posts