import React from "react"
import PropTypes from "prop-types"

import Header from '../components/header/index'
import Footer from '../components/footer/index'

import "../styles/index.scss"

const Layout = ({ children, noHeader }) => {
  return (
    <React.Fragment>
      <div id="app">
        {!noHeader && <Header />}
        <main className="content">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool,
}

Layout.defaultProps = {
  noHeader: false
}

export default Layout
