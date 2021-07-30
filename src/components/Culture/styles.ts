import tw from "twin.macro";
import styled from '@emotion/styled';

export const GridContainer = tw.div`
    grid md:grid-cols-2 grid-cols-1 gap-12 justify-center mt-12
`


export const ImgContainer = tw.div`
    relative rounded-lg overflow-hidden 
`

export const Overlay = styled.div`
    ${tw`z-20 absolute w-full h-full top-0 left-0`};
    background-color: rgba(0, 0, 0, .5);
`

export const ImgText = tw.h1`
   absolute z-30 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-main font-bold text-5xl text-white
`