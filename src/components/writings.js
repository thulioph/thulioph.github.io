import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import Link from './link'
import { useWritings } from '../hooks/use-writings'

const Writings = () => {
  const { writings } = useWritings()

  return (
    <React.Fragment>
      <Loading when={!writings || !writings.length}>
        <ul className="writings-list">
          {writings && writings.map(({ id, link, title, pubDate }) => (
            <Link key={id} href={link} title={title} pubDate={pubDate} />
          ))}
        </ul>
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Writings, {
  id: 'writings',
  title: 'Writings',
  seeAll: 'https://medium.com/@thulioph_'
})