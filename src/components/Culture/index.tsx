import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Container from "../ui/Container"
import Section from "../ui/Section"
import Title from "../ui/Title"
import * as Styled from "./styles"

interface CultureProps {
  content: string
  title: string
}

const Culture = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "culture section" } }) {
        frontmatter {
          content
          title
        }
      }

      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "culture blog" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              cover {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)

  const culture: CultureProps = markdownRemark.frontmatter
  const culturePosts = allMarkdownRemark.edges

  return (
    <Section>
      <Container>
        <Title title={culture.title} content={culture.content} />
        <Styled.GridContainer>
          {culturePosts.map(item => {
            const {
              id,
              frontmatter: { cover, title, slug },
            } = item.node

            const image = getImage(cover)

            return (
              <Link to={`culture/blog/${slug}`} key={id}>
                <Styled.ImgContainer>
                  <Styled.Overlay />
                  <GatsbyImage image={image} alt="cover" />
                  <Styled.ImgText>{title}</Styled.ImgText>
                </Styled.ImgContainer>
              </Link>
            )
          })}
        </Styled.GridContainer>
      </Container>
    </Section>
  )
}

export default Culture
