import React from "react"
import * as Styled from "./styles"

interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Container
