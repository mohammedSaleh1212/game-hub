import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBox from './SearchBox'
interface Props {
  onSearch : (searchValue:string) => void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src= {logo} boxSize='60px' />
        <SearchBox onSearch={onSearch}></SearchBox>
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar