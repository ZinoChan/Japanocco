import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import tw from 'twin.macro';


export interface StyledProps {
    hero?:boolean;
}

export const TitleContainer = tw.div`
    mb-8 max-w-2xl
`

export const Heading  = styled(motion.h2)(({hero}: StyledProps) => [
    tw `font-main font-bold text-primary mb-4`,
    hero ? tw`text-6xl` : tw`text-3xl`,
    
]) 

export const Text = tw.p`
    font-poppins leading-normal text-gray-500 text-sm mb-4
`

export const Line = tw.div`
    w-16 h-1 bg-secondary mb-4
`


