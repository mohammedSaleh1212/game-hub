import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Heading } from '@chakra-ui/react'
import {Game} from '../hooks/useGames'

interface Props {
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={game.game_image} />
        <CardBody>
          <Heading>{game.game_name}</Heading>
        </CardBody>
    </Card>

    
  )
}

export default GameCard