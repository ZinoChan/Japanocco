import tw from "twin.macro";

export const CardContainer = tw.div`
    rounded-lg overflow-hidden shadow-xl bg-white w-max
`

export const TextContainer = tw.div`
    p-2 
`

export const CardTitle = tw.h3`
    font-poppins font-semibold text-lg text-primary mb-2
`

export const CardFooter = tw.div`
    flex items-center justify-between 
`

export const Location = tw.span`
    font-poppins text-sm text-gray-500
`

export const CardLink = tw.span`
font-poppins font-semibold text-sm text-secondary
`