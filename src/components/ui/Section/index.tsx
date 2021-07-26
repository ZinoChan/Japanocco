import React from "react"
import * as Styled from "./styles"

interface Props {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children }) => {
  return <Styled.Section>{children}</Styled.Section>
}

export default Section
