import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const StyledContainer = styled.div`
  background: #f6f6f6;
  padding: 15vh 0 20vh;
`

const StyledBlog = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 7vh 7rem 1.5rem;
  background: #fff;

  @media (max-width: 1000px) {
    padding: 7vh 1rem 1.5rem;
  }
`

const StyledFooter = styled.footer`
  text-align: center;
  background: #373735;
  color: #bdc3c7;
  padding: 14px 0;
  font-size: 14px;

  a {
    color: #fff;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} siteDesc={data.site.siteMetadata.description} />
        <StyledContainer>
          <StyledBlog>
            <main>{children}</main>
          </StyledBlog>
        </StyledContainer>
        <StyledFooter>
          © {` `}
          <a href="https://www.pawelturkot.pl">pawelturkot.pl </a>
          {new Date().getFullYear()}, Made with ❤ in
            {` `}
          <a href="https://www.gatsbyjs.org">gatsbyJS</a>
        </StyledFooter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
