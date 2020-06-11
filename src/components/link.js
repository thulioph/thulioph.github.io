import React from 'react'

const Link = ({ href, title, pubDate }) => {
  return (
    <React.Fragment>
      <li>
        <a href={href} title={title} rel="noopener noreferrer" target="_blank">
          <p>{title}</p>
          <span>{pubDate}</span>
        </a>
      </li>
    </React.Fragment>
  )
}

export default Link
