import React from 'react'

import withGrid from './withGrid'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const About = () => {
  const { image, title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <figure>
        <img src={image} alt={title} />
      </figure>

      <p>{description}</p>
    </React.Fragment>
  )
}

export default withGrid(About, {
  id: 'about'
})