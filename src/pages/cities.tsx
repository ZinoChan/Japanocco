import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { BtnContainer } from "../components/Travel/styles"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Container from "../components/ui/Container"
import Section from "../components/ui/Section"
import Title from "../components/ui/Title"

const Cities = ({ data }) => {
  const cities = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Section>
        <Container>
          <Title title="All Destination" />
          <BtnContainer>
            <Button primary>japan</Button>
            <Button>moroccoo</Button>
          </BtnContainer>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {cities?.map(item => {
              const {
                id,
                frontmatter: { title, city, cover, slug },
              } = item.node

              return (
                <Link key={id} to={`blog/${slug}`}>
                  <Card image={cover} title={title} location={city} />
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query data {
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
`

export default Cities
