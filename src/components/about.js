import React from 'react'

import withGrid from './withGrid'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const About = () => {
  const { image, title, bio } = useSiteMetadata()

  return (
    <React.Fragment>
      <figure>
        <img src={image} alt={title} />
      </figure>

      <p dangerouslySetInnerHTML={{ __html: bio.summary }} />

      <a href="/about">more about me</a>
    </React.Fragment>
  )
}

export default withGrid(About, {
  id: 'about'
})