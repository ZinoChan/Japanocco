import React from "react"
import * as Styled from "./styles"

export interface TitleProps {
  title: string
  content?: string
  hero?: boolean
}

const Title: React.FC<TitleProps> = ({ hero, title, content = null }) => {
  return (
    <Styled.TitleContainer>
      <Styled.Heading hero={hero}>{title}</Styled.Heading>
      {title && <Styled.Text>{content}</Styled.Text>}
      <Styled.Line></Styled.Line>
    </Styled.TitleContainer>
  )
}

export default Title
