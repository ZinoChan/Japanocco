import * as React from "react"
import * as Styled from "./styles"
import { Link } from "gatsby"
import { Container } from "../ui/Container/styles"
import Logo from "../ui/Logo"
import { Squash as Hamburger } from "hamburger-react"
import { useState } from "react"

const Header = () => {
  const routes = [
    { route: "/", name: "home" },
    { route: "/cities", name: "cities" },
    { route: "/food", name: "food" },
    { route: "/culture", name: "culture" },
    { route: "/language", name: "language" },
  ]

  const [isOpen, setOpen] = useState(false)

  return (
    <Styled.Header>
      <Container>
        <Styled.Navbar>
          <Logo />
          <Styled.Navlist>
            {routes.map((route, index) => (
              <li key={`${route.name}-${index}`}>
                <Link to={route.route}>
                  <Styled.NavLink>{route.name}</Styled.NavLink>
                </Link>
              </li>
            ))}
          </Styled.Navlist>
          <Styled.MobileNavList isOpen={isOpen}>
            {routes.map((route, index) => (
              <li key={`${route.name}-${index}`}>
                <Link to={route.route}>
                  <Styled.NavLink mobile>{route.name}</Styled.NavLink>
                </Link>
              </li>
            ))}
          </Styled.MobileNavList>
          <div className="md:hidden relative z-40">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={isOpen ? "#fff" : "#1D3557"}
            />
          </div>
        </Styled.Navbar>
      </Container>
    </Styled.Header>
  )
}

export default Header
