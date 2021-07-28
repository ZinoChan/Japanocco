import * as React from "react"
import Culture from "../components/Culture"
import Food from "../components/Food"
import HeroBanner from "../components/HeroBanner"
import Language from "../components/Language"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Travel from "../components/Travel"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <Travel />
    <Culture />
    <Food />
    <Language />
  </Layout>
)

export default IndexPage
