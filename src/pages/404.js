import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../templates/page'

const NotFoundPage = () => (
  <React.Fragment>
    <Layout noHeader>
      <SEO title="404: Not found" />

      <h1>404: Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </React.Fragment>
)

export default (NotFoundPage)