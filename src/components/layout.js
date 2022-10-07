import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from "../styles/main"

const Layout = ({ children }) => (

  <>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <GlobalStyles />
    <main>{children}</main>
  </>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout