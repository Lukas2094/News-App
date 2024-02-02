import { Card, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Cards = styled(Card)`

   height: 250px;

   @media(max-width: 968px) {
     height: auto;
   } 

`;


export const Title = styled(Heading)`

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;   

`;

export const TextDescription = styled(Text)`

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

`;