import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import { useTalks } from '../hooks/use-talks'

const Talks = () => {
  const { talks } = useTalks()

  return (
    <React.Fragment>
      <Loading when={!talks || !talks.length}>
        <ul className="talks-list">
          {talks && talks.map(({ id, link, title, pubDate }) => (
            <li key={id}>
              <a
                href={link}
                title={title}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>{title}</p>
                <span>{pubDate}</span>
              </a>
            </li>
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