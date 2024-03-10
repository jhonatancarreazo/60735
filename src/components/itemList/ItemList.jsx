import React from 'react'
import Item from '../item/Item'
import { Flex,Box } from '@chakra-ui/react'
import './ItemList.css'
const ItemList = ({productos}) => {

  return (
    <Box className='cardContainer'>
      {productos.map((el) => (
        <Box className='card' key={el.id}>
            <Item  {...el}/>
        </Box>
      ))}
    </Box>
  )
}

export default ItemList
