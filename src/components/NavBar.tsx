import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBox from './SearchBox'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src= {logo} boxSize='60px' />
        <SearchBox></SearchBox>
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar