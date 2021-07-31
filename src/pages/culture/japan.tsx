import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import Container from "../../components/ui/Container"
import Section from "../../components/ui/Section"
import Title from "../../components/ui/Title"
import FormatHtml from "../../utils/FormatHtml"

const JapanCulture = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, cover } = data.markdownRemark.frontmatter
  const image = getImage(cover)
  return (
    <Layout>
      <Section>
        <Container>
          <Title title={title} />
          <div className="flex justify-center rounded-lg overflow-hidden my-16">
            <GatsbyImage image={image} alt={title} />
          </div>
          <FormatHtml content={html} />
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query Jculture {
    markdownRemark(frontmatter: { slug: { eq: "japan-culture" } }) {
      html
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
export default JapanCulture
