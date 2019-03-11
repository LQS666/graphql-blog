import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeander = styled.header`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 2.5rem 1.1rem;
`

const StyledContainerHeader = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`

const StyledH1 = styled.h1`
  margin: 40px 0 30px 0;
`

const StyledLink = styled(Link)`
  color: #2980b9;
  margin: 0 10px;
  position: relative;

  &::before {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    content: "";
    transition: .5s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #3498db;
  }
`


const Header = ({ siteTitle }) => (
  <StyledHeander>
    <StyledContainerHeader>
      <StyledH1>
        <Link
          to="/proj/08/"
          style={{
            color: `black`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>
      <StyledLink to="/proj/08/">Strona Główna</StyledLink>
      <StyledLink to="/proj/08/about">O mnie</StyledLink>

    </StyledContainerHeader>
  </StyledHeander>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
