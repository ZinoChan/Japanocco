import React from "react"
import Section from "../ui/Section"
import Container from "../ui/Container"
import { useStaticQuery, graphql } from "gatsby"
import Title, { TitleProps } from "../ui/Title"
import Button from "../ui/Button"
import * as Styled from "./styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface HeroBannerSection extends TitleProps {
  linkTo: string
  linkText: string
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          content
          title
          linkText
          linkTo
          cover_1 {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 400, height: 350)
            }
          }
          cover_2 {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 350, height: 400)
            }
          }
          cover_3 {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 400, height: 350)
            }
          }
          cover_4 {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 400, height: 350)
            }
          }
        }
      }
    }
  `)

  const heroBanner: HeroBannerSection = markdownRemark.frontmatter
  const image_1 = getImage(markdownRemark.frontmatter.cover_1)
  const image_2 = getImage(markdownRemark.frontmatter.cover_2)
  const image_3 = getImage(markdownRemark.frontmatter.cover_3)
  const image_4 = getImage(markdownRemark.frontmatter.cover_4)

  return (
    <Section padding={false}>
      <Container>
        <Styled.BannerContainer>
          <div>
            <Title hero title={heroBanner.title} content={heroBanner.content} />
            <Button primary>{heroBanner.linkText}</Button>
          </div>

          <Styled.ImgContainer>
            <div className="absolute -right-10 top-20  overflow-hidden rounded-lg">
              <GatsbyImage image={image_1} alt="cover" />
            </div>
            <div className="absolute z-20 bottom-20 right-20 overflow-hidden rounded-lg">
              <GatsbyImage image={image_2} alt="cover" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 transform translate-x-1/2 overflow-hidden rounded-lg">
              <GatsbyImage image={image_3} alt="cover" />
            </div>
            <div className="absolute top-40 left-40 overflow-hidden rounded-lg">
              <GatsbyImage image={image_4} alt="cover" />
            </div>
          </Styled.ImgContainer>
        </Styled.BannerContainer>
      </Container>
    </Section>
  )
}

export default HeroBanner
