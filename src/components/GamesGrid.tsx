
import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'

interface Props{
  selectedGenre:Genre | null
}

const GamesGrid = ({selectedGenre}:Props) => {

  const { games, isLoading } = useGames(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={'10px'}>

        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer  key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>

        )}



        {games && games.map(game =>
          <GameCardContainer key={game.id} >
            <GameCard game={game} />

          </GameCardContainer>

        )}

      </SimpleGrid>



    </>
  )
}

export default GamesGrid

