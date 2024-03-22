import { Card, CardHeader, CardBody, CardFooter, Image, Heading, HStack } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIcons from './PlatformIcons'
import CreticScore from './CreticScore'


interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.game_image} style={{height:'240px',aspectRatio:600/400}} />
      <CardBody>
        <Heading fontSize='2xl'>{game.game_name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIcons />
          <CreticScore score={game.score} />
        </HStack>



      </CardBody>
    </Card>


  )
}

export default GameCard