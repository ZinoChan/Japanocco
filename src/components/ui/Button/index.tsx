import React from "react"

import * as Styled from "./styles"

interface Props extends Styled.StyledProps {
  children: React.ReactNode
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ primary, children }) => {
    return (
      <Styled.Button
        primary={primary}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Styled.Button>
    )
  }

export default Button
