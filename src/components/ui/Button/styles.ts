import tw from "twin.macro"
import {motion} from 'framer-motion';

import styled from '@emotion/styled';
export interface StyledProps {
    primary?: boolean;
}

export const Button  = styled(motion.button)(({primary}: StyledProps) => [
    tw`py-2 focus:outline-none px-6 text-sm font-poppins rounded-md font-semibold border border-primary `,
    primary ? tw`bg-primary text-white` : tw`text-primary`,
    `box-shadow: box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1)`,
    `min-width: 114px`
]) 