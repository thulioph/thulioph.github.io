import React from 'react'

const withGrid = (WrappedComponent, state) => {
  return class Grid extends React.Component {
    render() {
      const { id, title, seeAll } = state
      const shouldOpenInANewPage = seeAll && seeAll.includes("http")

      return (
        <React.Fragment>
          <section id={id} className={`section ${id}`}>
            <div className="container">
              <div className="wrapper">
                {title && <h3 className="section-title">{title}</h3>}

                <WrappedComponent {...this.props} />

                {seeAll && (
                  <a
                    className="see-all"
                    href={seeAll}
                    rel="noopener noreferrer"
                    target={shouldOpenInANewPage ? '_blank' : ''}
                  >
                    see all
                  </a>
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
  }
}

export default withGrid