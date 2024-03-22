import React, { useEffect, useState } from 'react'

import useGenres from '../hooks/useGenres'
import { HStack, Image, List, ListItem,Spinner,Text } from '@chakra-ui/react'
import GenresSkeleton from './GenresSkeleton'



const Genres = () => {
    const { genres, isLoading } = useGenres()
    const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (

        <>
        {isLoading && skeleton.map(element => <GenresSkeleton key={element}/>)}
            <List paddingLeft='0'>

                {genres && genres.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                          <Image src={genre.genre_image} boxSize='32px' borderRadius={8}/>
                          <Text fontSize='lg'>

                        {genre.genre_name}
                          </Text>

                        </HStack>
                    </ListItem>)}
            </List>


        </>


    )
}

export default Genres