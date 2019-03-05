import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import './header.css'



const StyledContainerHeader = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`

const StyledH1 = styled.h1`
  margin: 40px 0 30px 0;
`


const Header = ({ siteTitle }) => (
  <header>
    <StyledContainerHeader>

      <StyledH1>
        <Link
          to="/"
          style={{
            color: `black`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>

      <Link
        to="/"
        style={{
          color: `#2980b9`,
          margin: `0 10px`,
        }}
      >Strona Główna
      </Link>
      <Link
        to="/about"
        style={{
          color: `#2980b9`,
          margin: `0 10px`,
        }}
      >O mnie
      </Link>

    </StyledContainerHeader>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
