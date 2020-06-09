import React from "react"
import PropTypes from "prop-types"

import Header from './header/index'
import Footer from './footer/index'

import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div id="app">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
