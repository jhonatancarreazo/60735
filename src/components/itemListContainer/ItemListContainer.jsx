import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../itemList/ItemList'
import './ItemListContainer.css'
const ItemListContainer = ({title}) => {
  const [productos, setProductos ] = useState([]) 

  useEffect(() => {
    getProducts()
      .then((data) => setProductos(data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <Heading className='title'>{title}</Heading>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
