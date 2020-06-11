import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import Link from './link'
import { useTalks } from '../hooks/use-talks'

const Talks = () => {
  const { talks } = useTalks()

  return (
    <React.Fragment>
      <Loading when={!talks || !talks.length}>
        <ul className="talks-list">
          {talks && talks.map(({ id, link, title, pubDate }) => (
            <Link key={id} href={link} title={title} pubDate={pubDate} />
          ))}
        </ul>
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Talks, {
  id: 'talks',
  title: 'Talks',
  seeAll: 'https://speakerdeck.com/thulioph'
})