import * as React from "react"
import HeroBanner from "../components/HeroBanner"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
  </Layout>
)

export default IndexPage
