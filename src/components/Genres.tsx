import React, { useEffect, useState } from 'react'

import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Image, List, ListItem,Spinner,Text } from '@chakra-ui/react'
import GenresSkeleton from './GenresSkeleton'


interface Props {
    onSelectGenre:(genre:Genre) => void
    selectedGenre:Genre | null
}



const Genres = ({onSelectGenre,selectedGenre} : Props) => {
    const { genres, isLoading } = useGenres()
    const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



    return (

        <>
        {isLoading && skeleton.map(element => <GenresSkeleton key={element}/>)}
            <List paddingLeft='0'>

                {genres && genres.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                          <Image src={genre.genre_image} boxSize='32px' borderRadius={8}   />
                          <Button fontWeight={genre.id == selectedGenre?.id ?'bold':'normal'} variant={'link'} fontSize='lg' marginBottom={0} onClick={() => onSelectGenre(genre)}>

                        {genre.genre_name}
                          </Button >

                        </HStack>
                    </ListItem>)}
            </List>


        </>


    )
}

export default Genres