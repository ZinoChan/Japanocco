import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import tw from "twin.macro"

const Header = tw.h1`
  text-blue-600 text-4xl
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Header>Hello</Header>
  </Layout>
)

export default IndexPage
