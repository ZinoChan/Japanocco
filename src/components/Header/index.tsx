import * as React from "react"
import * as Styled from "./styles"
import { Link } from "gatsby"
import { Container } from "../ui/Container/styles"

const Header = () => {
  const routes = [
    { route: "/", name: "home" },
    { route: "/cities", name: "cities" },
    { route: "/food", name: "food" },
    { route: "/culture", name: "culture" },
    { route: "/language", name: "language" },
  ]

  return (
    <Styled.Header>
      <Container>
        <Styled.Navbar>
          <div>Logo</div>
          <Styled.Navlist>
            {routes.map((route, index) => (
              <li key={`${route.name}-${index}`}>
                <Link to={route.route}>
                  <Styled.NavLink>{route.name}</Styled.NavLink>
                </Link>
              </li>
            ))}
          </Styled.Navlist>
        </Styled.Navbar>
      </Container>
    </Styled.Header>
  )
}

export default Header
