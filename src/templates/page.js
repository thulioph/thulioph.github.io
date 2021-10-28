import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from '../components/header'
import Footer from '../components/footer'
import { SwitchTheme } from '../components/shared'

import "../styles/index.scss"

import {
  light as lightTheme,
  dark as darkTheme
} from '../styles/theme'

import GlobalStyle from "../styles/global"

const Layout = ({ children, noHeader }) => {
  const [currentTheme, setLight] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('thulioph-theme')
    if (savedTheme) setLight(savedTheme)
  }, [setLight])

  const changeTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setLight(newTheme)
    localStorage.setItem('thulioph-theme', newTheme)
  }

  const theme = currentTheme === 'light' ? lightTheme : darkTheme

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <SwitchTheme onClick={() => changeTheme()}>
          change theme color
        </SwitchTheme>

        <div id="app">
          {!noHeader && <Header />}
          <main className="content">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
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
