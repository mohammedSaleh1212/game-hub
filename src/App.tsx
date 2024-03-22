import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GamesGrid from './components/GamesGrid'
import Genres from './components/Genres'


function App() {

  return (


    <Grid
      templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`//wider than 1024px

        }
      }>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg" >
        <GridItem area={'aside'}>
          <Genres />
        </GridItem>

      </Show>
      <GridItem area={'main'}>
        <GamesGrid />
      </GridItem>


    </Grid>


  )
}

export default App
