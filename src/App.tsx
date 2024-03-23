import {  Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GamesGrid from './components/GamesGrid'
import Genres from './components/Genres'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { Game } from './hooks/useGames'


function App() {
  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedGame , setSelectedGame] = useState<Game>()

  return (


    <Grid
      templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`//wider than 1024px

        }
      }
        templateColumns ={{
          base:'1fr',
          lg :'200px 1fr'

          
        }}
      >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg" >
        <GridItem area={'aside'} paddingX='5px'>
          <Genres  onSelectGenre={(genre) => setSelectedGenre(genre)}  selectedGenre={selectedGenre} />
        </GridItem>

      </Show>
      <GridItem area={'main'}>
        <GamesGrid selectedGenre={selectedGenre}/>
      </GridItem>


    </Grid>


  )
}

export default App
