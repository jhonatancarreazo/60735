import React, { useEffect, useState } from 'react';
//import useProductData from '../../hooks/useProductData';
import ItemList from '../itemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
const ItemListContainer = ({ title }) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()
  
  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts
      .then((el) => setData(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[categoryId])

  return (
    <div>
      {
        loading ? 
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> : 
        <>
          <h1>{title}</h1>
          <h2>Hola</h2>
          <ItemList data={data} />
        </>
      }
    </div>
  )
}

export default ItemListContainer
