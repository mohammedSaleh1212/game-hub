
import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'



const GamesGrid = () => {

  const { games ,isLoading} = useGames()
  const skeletons = [1,2,3,4,5,6]
  return (
    <>
      <SimpleGrid columns={{sm:1 , md:2 ,lg:3 }} spacing={10}padding={'10px'}>
 
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
      {games && games.map(game => 
        <GameCard key={game.id} game={game} />
        
        )}

      </SimpleGrid>



    </>
  )
}

export default GamesGrid

