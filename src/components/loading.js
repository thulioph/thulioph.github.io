import React from 'react'

import Spinner from './spinner'

const Loading = ({ when, children }) => {
  if (!when) return children
  return <Spinner />
}

export default Loading
