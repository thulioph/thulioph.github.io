import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import { useWritings } from '../hooks/use-writings'

const Writings = () => {
  const { writings } = useWritings()

  return (
    <React.Fragment>
      <Loading when={!writings || !writings.length}>
        <ul className="writings-list">
          {writings && writings.map(({ id, link, title, pubDate }) => (
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

export default withGrid(Writings, {
  id: 'writings',
  title: 'Writings',
  seeAll: 'https://medium.com/@thulioph_'
})