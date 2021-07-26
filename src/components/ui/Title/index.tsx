import React from "react"
import * as Styled from "./styles"

interface Props {
  title: string
  text: string
}

const Title: React.FC<Props> = ({ title, text }) => {
  return (
    <Styled.TitleContainer>
      <Styled.Heading>{title}</Styled.Heading>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Line></Styled.Line>
    </Styled.TitleContainer>
  )
}

export default Title
