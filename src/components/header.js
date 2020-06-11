import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from '../hooks/use-site-metadata'

import { LogoIcon, TwitterIcon, LinkedinIcon, GithubIcon } from "./icons"

const Header = () => {
  const { twitter, github, linkedin } = useSiteMetadata()

  const menuLinks = [
    { url: '/#about', value: 'About' },
    { url: '/#talks', value: 'Talks' },
    { url: '/#projects', value: 'Projects' },
    { url: '/#writings', value: 'Writings' },
  ]

  const socialLinks = [
    {
      url: `https://twitter.com/${twitter}`,
      value: "Twitter",
      icon: <TwitterIcon width={30} height={30} />,
    },
    {
      url: `https://linkedin.com/in/${linkedin}`,
      value: "LinkedIn",
      icon: <LinkedinIcon width={30} height={30} />,
    },
    {
      url: `https://github.com/${github}`,
      value: "Github",
      icon: <GithubIcon width={30} height={30} />,
    },
  ]

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
              {menuLinks.map(link => (
                <li key={link.value}>
                  <a href={link.url} title={link.value}>
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </menu>

          <ul className="social-links">
            {socialLinks.map(link => (
              <li key={link.value}>
                <a
                  href={link.url}
                  title={link.value}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
