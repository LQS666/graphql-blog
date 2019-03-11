import React from 'react';
import { StaticQuery, graphql } from "gatsby"

const About = () => (
    <StaticQuery
        query={graphql`
        {
            awesomeblog {
                authors {
                    id
                    name
                    avatar {
                        url
                    }
                    bibliography
                }
            }
        }
      `}
        render={({ awesomeblog: { authors } }) => (
            <>
                {
                    authors.map((author, i) => (
                        <div key={i}>
                            <img src={author.avatar.url} alt="" />
                            <h1>{author.name}</h1>
                            <p>{author.bibliography}</p>
                        </div>
                    ))
                }
            </>
        )}
    />
)
export default About