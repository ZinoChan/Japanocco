import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import Container from "../ui/Container"
import Section from "../ui/Section"
import Title from "../ui/Title"
import * as Styled from "./styles"
import { LinkText } from "../Travel/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

interface FoodProps {
  content: string
  title: string
  linkTo: string
  linkText: string
}

const Food = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "food section" } }) {
        frontmatter {
          content
          title
          linkTo
          linkText
        }
      }

      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "food blog" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              cover {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 290, height: 490)
                }
              }
            }
          }
        }
      }
    }
  `)

  const food: FoodProps = markdownRemark.frontmatter
  const foodPosts = allMarkdownRemark.edges

  return (
    <Section>
      <Container>
        <Title title={food.title} content={food.content} />
        <Styled.ImgContainer>
          {foodPosts.map((item, index) => {
            const {
              id,
              frontmatter: { cover, title, slug },
            } = item.node

            const image = getImage(cover)

            return (
              <Link to={`food/blog/${slug}`} key={id}>
                <Styled.ImgCard margin={index % 2 === 0}>
                  <GatsbyImage image={image} alt="food" />
                  <Styled.ImgOverlay>
                    <Styled.ImgText>{title}</Styled.ImgText>
                  </Styled.ImgOverlay>
                </Styled.ImgCard>
              </Link>
            )
          })}
        </Styled.ImgContainer>
        <Link to={food.linkTo}>
          <LinkText>
            {food.linkText}
            <span className="ml-4">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </LinkText>
        </Link>
      </Container>
    </Section>
  )
}

export default Food
