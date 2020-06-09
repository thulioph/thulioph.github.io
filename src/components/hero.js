import React from 'react'

import withGrid from './withGrid'

const Hero = () => {
  return (
    <React.Fragment>
      <h2>
        Hi, I'm {``}

        <div className="crossed">
          <span>Thulio Philipe</span>, a.k.a
        </div> {``}

        <span>thulioph</span>.
      </h2>

      <h4>
        Consultant Developer at {``}

        <span>
          <a
            href="https://www.thoughtworks.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ThoughtWorks
          </a>
        </span>
      </h4>
    </React.Fragment>
  )
}

export default withGrid(Hero, {
  id: 'hero'
})