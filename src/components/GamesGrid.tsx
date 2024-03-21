
import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'



const GamesGrid = () => {

  const { games } = useGames()
  return (
    <>
      <SimpleGrid columns={{sm:1 , md:2 ,lg:3 }} spacing={10}padding={'10px'}>

      {games && games.map(game => 
        <GameCard key={game.id} game={game} />
        
        )}

      </SimpleGrid>



    </>
  )
}

export default GamesGrid

