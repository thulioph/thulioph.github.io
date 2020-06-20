import React from 'react'

const Link = ({ href, title, pubDate, target = '_blank' }) => {
  return (
    <React.Fragment>
      <li>
        <a href={href} title={title} rel="noopener noreferrer" target={target}>
          <p>{title}</p>
          <span>{pubDate}</span>
        </a>
      </li>
    </React.Fragment>
  )
}

export default Link
