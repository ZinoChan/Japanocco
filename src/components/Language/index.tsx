import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { BannerContainer } from "../HeroBanner/styles"
import Container from "../ui/Container"
import Section from "../ui/Section"
import Title from "../ui/Title"
import Button from "../ui/Button"
import { useStaticQuery, graphql } from "gatsby"

const Language = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "language section" } }) {
        frontmatter {
          content
          title
          linkText
          linkTo
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 450, height: 300)
            }
          }
        }
      }
    }
  `)

  const language = markdownRemark.frontmatter

  const image = getImage(language.cover)

  return (
    <Section>
      <Container>
        <BannerContainer>
          <div>
            <Title title={language.title} content={language.content} />
            <Button primary>{language.linkText}</Button>
          </div>
          <div>
            <GatsbyImage image={image} alt="langs" />
          </div>
        </BannerContainer>
      </Container>
    </Section>
  )
}

export default Language
