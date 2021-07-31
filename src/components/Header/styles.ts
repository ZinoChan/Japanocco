import styled from "@emotion/styled";
import tw from "twin.macro";
import {motion} from 'framer-motion'


interface StyledProps {
    isOpen?: boolean;
    mobile?: boolean;
    dropdown?: boolean;
}

export const Header = styled(motion.header)(
    tw` w-full absolute top-0 py-4`
)

export const Navbar = tw.nav`
    flex items-center justify-between
`

export const Navlist = tw.ul`
    lg:flex space-x-6 items-center hidden
`

export const NavLink = styled.span(({mobile}: StyledProps) => [
    tw`font-poppins font-semibold text-lg  capitalize hover:text-secondary cursor-pointer`,
    mobile ? tw`text-white` : tw`text-gray-800`
])

export const MobileNavList = styled.ul(({isOpen}: StyledProps) => [
    tw`transition-all duration-300 overflow-hidden flex md:hidden flex-col absolute top-0 right-0 w-screen bg-primary items-center text-white z-30 space-y-6 justify-center  h-screen`,
    isOpen ? tw`max-h-screen` : tw`max-h-0`
     
])


export const DropDownList = tw.li`
    relative flex items-center space-x-4 justify-between cursor-pointer hover:text-secondary
`

export const DropDownNav = styled.ul(({dropdown}: StyledProps) => [
    tw` absolute z-40 top-full m-0 text-center p-4 left-0 bg-white shadow-lg rounded-lg  flex-col space-y-4`,
    dropdown ? tw`flex` : tw`hidden`
])