import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useState } from 'react'
interface Props {
  onSelectSortOrder : (sortOrder:string) => void
}

const SortSelector = ({onSelectSortOrder}:Props) => {
  const [currentOrder,setCurrentOrder] = useState('Relevance')
  
    const sortOrders = [
        {value : "", label : "Relevance"},
        {value : "-added", label : "Date Added"},
        {value : "game_name", label : "Name"},
        {value : "-release", label : "Release Date"},
        {value : "-popularity", label : "Popularity"},
        {value : "score", label : "Average Rating"}
    ]
  return (
    <Menu>
        <MenuButton as={Button} >
            Order By: {currentOrder}
        </MenuButton>
        <MenuList>
         {sortOrders.map((order) => <MenuItem key={order.value} value={order.value} onClick={() => {onSelectSortOrder(order.value)
          setCurrentOrder(order.label)}}>{order.label}</MenuItem>)}

        </MenuList>


        
    </Menu>
   
  )
}

export default SortSelector