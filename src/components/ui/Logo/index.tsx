import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <Link to="/">
      <StaticImage
        src="../../../images/logo.png"
        alt="Logo"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={40}
      />
    </Link>
  )
}

export default Logo
