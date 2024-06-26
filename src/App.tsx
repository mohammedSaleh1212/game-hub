import {  Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GamesGrid from './components/GamesGrid'
import Genres from './components/Genres'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import SortSelectorList from './components/SortSelectorList'
import Heading from './components/Heading'


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedSortSelector, setselectedSortSelector] = useState<string | null>(null)




  return (


    <Grid
      templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`//wider than 1024px

        }
      }
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'


      }}
    >
      <GridItem area={'nav'}>
        <NavBar onSearch={(searchValue) => console.log(searchValue)} />
      </GridItem>
      <Show above="lg" >
        <GridItem area={'aside'} paddingX='5px'>
        <Heading text = 'Genres' />

          <Genres onSelectGenre={(genre) => {setSelectedGenre(genre)}} selectedGenre={selectedGenre} />
        </GridItem>

      </Show>
      <GridItem area={'main'}>
        <Heading text = {selectedGenre?selectedGenre.genre_name:'Relevance'} />

  
        <SortSelectorList onSelectSortOrder={(sortOrder) => setselectedSortSelector(sortOrder)} />
        <GamesGrid selectedGenre={selectedGenre} selectedSortSelector={selectedSortSelector} />
      </GridItem>


    </Grid>


  )
}

export default App
