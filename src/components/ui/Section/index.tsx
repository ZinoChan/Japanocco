import React from "react"
import * as Styled from "./styles"

interface Props extends Styled.StyledProps {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children, padding }) => {
  return <Styled.Section padding={padding}>{children}</Styled.Section>
}

export default Section
