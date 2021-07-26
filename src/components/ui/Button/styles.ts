import tw, {styled} from "twin.macro"
import {motion} from 'framer-motion';

export interface StyledProps {
    primary?: boolean;
}

export const Button  = styled(motion.button)(({primary}: StyledProps) => [
    tw`py-2 px-6 font-sm font-poppins font-semibold`,
    primary ? tw`bg-primary text-white` : tw`border border-primary text-primary`,
    `box-shadow: box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);`
]) 