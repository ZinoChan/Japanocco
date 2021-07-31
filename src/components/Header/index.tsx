import * as React from "react"
import * as Styled from "./styles"
import { Link } from "gatsby"
import { Container } from "../ui/Container/styles"
import Logo from "../ui/Logo"
import { Squash as Hamburger } from "hamburger-react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const routes = [
    { route: "/", name: "home" },
    { route: "/cities", name: "cities" },
    { route: "/food", name: "food" },
    { route: "/culture", name: "culture" },
    { route: "/language", name: "language" },
  ]

  const [isOpen, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

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
            <Styled.DropDownList onClick={() => setDropdown(!dropdown)}>
              <Styled.NavLink>culture</Styled.NavLink>
              <FontAwesomeIcon icon={dropdown ? faChevronUp : faChevronDown} />
              <Styled.DropDownNav dropdown={dropdown}>
                <Link to="/culture/japan">
                  <Styled.NavLink>Japan</Styled.NavLink>
                </Link>
                <Link to="/culture/morocco">
                  <Styled.NavLink>Morocco</Styled.NavLink>
                </Link>
              </Styled.DropDownNav>
            </Styled.DropDownList>
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
