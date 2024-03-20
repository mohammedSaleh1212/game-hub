
import useGames from  '../hooks/useGames'



const GamesGrid = () => {
  
    const {games} = useGames()
  return (
   <>
   <ul>
   {games && games.map(game => <li key={game.id}>{game.game_name}</li>) }

   </ul>
   
   </>
  )
}

export default GamesGrid

