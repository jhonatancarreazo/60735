import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
const ItemCount = ({stock, initialValue}) => {
    const [count , setCount ] = useState(initialValue)
    console.log(stock, initialValue)
    console.log(count)
    const incrementarCantidad = () => {
        count < stock && setCount(count + 1)
    }
    const decrementarCantidad = () => {
        count > initialValue &&  setCount(count - 1)
    }
  return (
    <Flex>
        <Button onClick={decrementarCantidad}>-</Button>
        <h2>{count}</h2>
        <Button onClick={incrementarCantidad}>+</Button>
    </Flex>
  )
}

export default ItemCount
