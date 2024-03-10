import { Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import './ItemCount.css'
const ItemCount = () => {
    const [ count , setCount ] = useState(1)
    const stock = 5

const incrementar = () => {
    count < stock && setCount(count + 1) 
}
const decrementar = () => {
    count > 1 && setCount(count - 1)
}


  return (
    <div className='itemCount'>
        <Button onClick={decrementar}>-</Button>
        <Heading>{count}</Heading>
        <Button onClick={incrementar}>+</Button>
        <Button>Agragar al carrito</Button>
    </div>
  )
}

export default ItemCount
