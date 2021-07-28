import styled from "@emotion/styled";
import tw from "twin.macro";


export const CardContainer = styled.div`
    ${tw`rounded-lg overflow-hidden  bg-white w-max`};
    box-shadow: 0 16px 50px rgba(0,0,0, 0.1);
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