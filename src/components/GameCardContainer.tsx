
import { Box } from '@chakra-ui/react'
import  { ReactNode } from 'react'
interface Props {
    children:ReactNode
}

const GameCardContainer = ({children}:Props) => {

  return (
<Box borderRadius={'10px'} overflow={'hidden'} width='350px' className='mx-auto'>
    {children}

</Box>
  )
}

export default GameCardContainer