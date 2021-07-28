import React from "react"
import * as Styled from "./styles"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Card = ({ image, title, location }) => {
  const $image = getImage(image)

  return (
    <Styled.CardContainer>
      <GatsbyImage image={$image} alt="city" />
      <Styled.TextContainer>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardFooter>
          <Styled.Location>
            <span className="mr-2 w-6 h-6">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            {location}
          </Styled.Location>
          <Styled.CardLink>Read more</Styled.CardLink>
        </Styled.CardFooter>
      </Styled.TextContainer>
    </Styled.CardContainer>
  )
}

export default Card
