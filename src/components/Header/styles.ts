import styled from "@emotion/styled";
import tw from "twin.macro";
import {motion} from 'framer-motion'

export const Header = styled(motion.header)(
    tw` w-full absolute top-0 py-4`
)

export const Navbar = tw.nav`
    flex items-center justify-between
`

export const Navlist = tw.ul`
    flex space-x-6 items-center
`

export const NavLink = tw.span`
    font-poppins font-semibold text-lg text-gray-800 capitalize
`
