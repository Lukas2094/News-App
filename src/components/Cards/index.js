import {CardBody, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import 'moment/locale/pt-br';
import * as S from './styles';

export default function Cards({
    author,
    content,
    description,
    published,
    source,
    title,
    url,
    urlImg
}) {
    return (
        <>
        <Link href={url} target="_blank">
           <S.Cards
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            maxWidth={'500px'}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    // src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    src={urlImg}
                    alt={title}
                />

                <Stack>
                    <CardBody>
                    <Text py='2'>
                        {author}
                    </Text>

                    <S.Title size='md'>{title}</S.Title>

                    <S.TextDescription py='1'>
                        {description}
                    </S.TextDescription>

                    <Text py='2' fontSize={'10px'}>
                        {moment(published).locale('pt-br').format("LLL")}
                    </Text>

                    <Text py='2' fontSize={'10px'}>
                      Fonte: {source}
                    </Text>
                    </CardBody>
                </Stack>
            </S.Cards>
        </Link>
     
        </>
    )
}