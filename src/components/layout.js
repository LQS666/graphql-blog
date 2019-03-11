import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const StyledContainerLayout = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledContainerLayout>
          <main>{children}</main>

          <footer>
            © {` `}
            <a href="https://www.pawelturkot.pl">pawelturkot.pl </a>
            {new Date().getFullYear()}, Made with ❤ in
            {` `}
            <a href="https://www.gatsbyjs.org">gatsbyJS</a>
          </footer>
        </StyledContainerLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
