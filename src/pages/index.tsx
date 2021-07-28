import * as React from "react"
import HeroBanner from "../components/HeroBanner"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Travel from "../components/Travel"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <Travel />
  </Layout>
)

export default IndexPage
