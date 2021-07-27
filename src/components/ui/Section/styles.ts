import styled from "@emotion/styled";
import tw from "twin.macro";

export interface StyledProps {
    padding?: boolean;
}

export const Section = styled.section(({padding}: StyledProps) => [
    tw`flex items-center py-20`,
    padding && tw`py-20`
])