import React from "react"

const SectionIntro = ({ title, description }) => {
  return (
    <React.Fragment>
      <section className="section-intro">
        <div className="section-description">
          <h4 className="section-title">{title}</h4>
          <p className="section-description">{description}</p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SectionIntro
