
import  { Genre } from '../hooks/useGenres'
import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'
import GenresSkeleton from './GenresSkeleton'
import useStaticGenres from '../hooks/useStaticGenres'


interface Props {
    onSelectGenre:(genre:Genre) => void
    selectedGenre:Genre | null
}



const Genres = ({onSelectGenre,selectedGenre} : Props) => {
    const { genres, isLoading } = useStaticGenres()//try useGenres() instead to get the genres from the database
    const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



    return (

        <>
        {isLoading && skeleton.map(element => <GenresSkeleton key={element}/>)}
            <List paddingLeft='0'>

                {genres && genres.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                          <Image src={genre.genre_image} boxSize='32px' borderRadius={8}  objectFit={'cover'} />
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