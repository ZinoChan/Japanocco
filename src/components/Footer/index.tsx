import React from "react"
import * as Styled from "./styles"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Container from "../ui/Container"
import Logo from "../ui/Logo"

const Footer = () => {
  const routes = [
    { route: "/", name: "home" },
    { route: "/cities", name: "cities blog" },
    { route: "/food", name: "food blog" },
    { route: "/culture", name: "culture blog" },
    { route: "/language", name: "language blog" },
  ]
  return (
    <Styled.Footer>
      <Container>
        <Styled.FooterContent>
          <Styled.FooterNav>
            {routes.map((route, index) => (
              <Link to={route.route} key={`${route.name}-${index}`}>
                <Styled.NavLink>{route.name}</Styled.NavLink>
              </Link>
            ))}
          </Styled.FooterNav>
          <Styled.Socials>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </Styled.Socials>
        </Styled.FooterContent>
      </Container>
    </Styled.Footer>
  )
}

export default Footer
