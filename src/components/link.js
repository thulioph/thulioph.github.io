import React from 'react'

const Link = ({ href, title, pubDate, target = '_blank', lang = null }) => {
  return (
    <React.Fragment>
      <li>
        <a href={href} title={title} rel="noopener noreferrer" target={target}>
          <p>
            {title} {lang && <span className="post-lang">{lang}</span>}
          </p>
          <span>{pubDate}</span>
        </a>
      </li>
    </React.Fragment>
  )
}

export default Link
