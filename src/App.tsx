import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {

  return (


    <Grid
      templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`//wider than 1024px

        }
      }>
      <GridItem bg='orange.300' area={'nav'}>nav</GridItem>
      <Show above="lg" >
        <GridItem bg='yellow' area={'aside'}>aside</GridItem>

      </Show>
      <GridItem bg='red' area={'main'}>main</GridItem>


    </Grid>

  )
}

export default App
