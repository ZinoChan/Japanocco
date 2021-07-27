import tw from "twin.macro"
import {motion} from 'framer-motion';

import styled from '@emotion/styled';
export interface StyledProps {
    primary?: boolean;
}

export const Button  = styled(motion.button)(({primary}: StyledProps) => [
    tw`py-2 px-6 text-sm font-poppins rounded-md font-semibold`,
    primary ? tw`bg-primary text-white` : tw`border border-primary text-primary`,
    `box-shadow: box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);`
]) 