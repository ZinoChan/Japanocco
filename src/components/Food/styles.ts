import styled from "@emotion/styled";
import tw from "twin.macro";

export interface StyledProps {
    margin?: boolean;
}

export const ImgContainer = tw.div`
    grid grid-cols-4 gap-8 mt-28 mb-16
`

export const ImgCard = styled.div(({margin}: StyledProps) => [
    tw`rounded-lg relative w-max overflow-x-hidden`,
    margin && tw`-mt-10`
])

export const ImgOverlay = styled.div`
    ${tw`absolute top-0 left-0 w-full z-20 h-full flex items-end p-4`};
    background: linear-gradient(180deg, rgba(0,0,0,0.2721463585434174) 0%, rgba(0,0,0,.6) 100%);
    
`

export const ImgText = tw.h3`
    text-white text-xl font-poppins font-semibold
`

