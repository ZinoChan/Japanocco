import React from "react"
import Section from "../../components/ui/Section"
import Container from "../../components/ui/Container"
import Layout from "../../components/Layout"
import Title from "../../components/ui/Title"
import FormatHtml from "../../utils/FormatHtml"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

interface Props {
  html: any
  title: string
}

const BlogPost = ({ data }) => {
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
  query BlogPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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

export default BlogPost
