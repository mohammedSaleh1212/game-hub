import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIcons from './PlatformIcons'
import CreticScore from './CreticScore'
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'


interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.game_image ? game.game_image : noImage} style={{height:'240px',aspectRatio:600/400}} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIcons />
          <CreticScore score={game.score} />
        </HStack>
        <Heading fontSize='2xl'>{game.game_name}</Heading>



      </CardBody>
    </Card>


  )
}

export default GameCard