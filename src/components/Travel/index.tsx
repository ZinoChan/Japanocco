import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Section from "../ui/Section"
import Container from "../ui/Container"
import Title from "../ui/Title"
import * as Styled from "./styles"
import Button from "../ui/Button"
import Card from "../ui/Card/index"
import Carousel from "../ui/Carousel"

interface TravelProps {
  title: string
  content: string
  type_1: string
  type_2: string
  linkTo: string
  linkText: string
}

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const Travel = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "cities section" } }) {
        frontmatter {
          type_1
          type_2
          title
          linkTo
          linkText
          content
        }
      }

      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "japan city blog" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              city
              title
              cover {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 300, height: 320)
                }
              }
            }
          }
        }
      }
    }
  `)

  const travel: TravelProps = markdownRemark.frontmatter
  const cities = allMarkdownRemark.edges

  return (
    <Section>
      <Container>
        <Title title={travel.title} content={travel.content} />
        <Styled.BtnContainer>
          <Button primary>{travel.type_1}</Button>
          <Button>{travel.type_2}</Button>
        </Styled.BtnContainer>
        <Styled.SliderContainer>
          <Carousel settings={settings}>
            {cities.map(item => {
              const {
                id,
                frontmatter: { title, city, cover, slug },
              } = item.node
              return (
                <Link key={id} to={`cities/blog/${slug}`}>
                  <Card image={cover} title={title} location={city} />
                </Link>
              )
            })}
          </Carousel>
          <Link to="/cities">
            <Styled.LinkText>View more</Styled.LinkText>
          </Link>
        </Styled.SliderContainer>
      </Container>
    </Section>
  )
}

export default Travel
