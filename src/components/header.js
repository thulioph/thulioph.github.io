import React from "react"
import { Link } from "gatsby"

import { LogoIcon } from "./icons"

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/">
              <LogoIcon width={53} height={53} />
            </Link>
          </h1>

          <menu className="menu">
            <ul className="menu-links">
              <Link activeClassName="js-active" to="/about">About me</Link>
              <Link activeClassName="js-active" to="/writings">Blog</Link>
            </ul>
          </menu>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
