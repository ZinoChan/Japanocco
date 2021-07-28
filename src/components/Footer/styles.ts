import tw from 'twin.macro';


export const Footer = tw.footer`
    bg-primary py-20 text-center flex items-center
`

export const FooterNav = tw.ul`
flex space-x-6 items-center my-10 justify-center
`

export const FooterContent = tw.div`
    w-max mx-auto
`


export const NavLink = tw.span`
    font-poppins  text-lg text-white capitalize hover:text-secondary
`

export const Socials = tw.div`
    flex items-center space-x-4 text-white justify-center
`