
import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'



const GamesGrid = () => {

  const { games, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={'10px'}>

        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>

        )}



        {games && games.map(game =>
          <GameCardContainer>
            <GameCard key={game.id} game={game} />

          </GameCardContainer>

        )}

      </SimpleGrid>



    </>
  )
}

export default GamesGrid

