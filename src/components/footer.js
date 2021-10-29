import React from 'react'
import { Link } from "gatsby"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <aside className="footer-menu">
            <ul>
              <Link to="/about">
                <h4>About</h4>
                <p>A little bit about me.</p>
              </Link>

              <Link to="/#talks">
                <h4>Talks</h4>
                <p>Sharing knowledge.</p>
              </Link>

              <Link to="/#projects">
                <h4>Projects</h4>
                <p>Open-Source experiments.</p>
              </Link>

              <Link to="/writings">
                <h4>Blog</h4>
                <p>Tech articles.</p>
              </Link>

              {/* <Link to="/hire">
                <h4>Hire</h4>
                <p>Get in touch.</p>
              </Link> */}
            </ul>
          </aside>

          <aside className="copyright">
            <p>© 2012–Today / Copyright Thulio Philipe. All rights reserved.</p>
          </aside>

          <aside className="since">
            <small>
              made with <span>♥</span> since{" "}
              <a
                href="https://web.archive.org/web/20130328062741/http://about.me/thulioph"
                rel="noopener noreferrer"
                target="_blank"
              >
                2012
              </a>
            </small>
          </aside>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer