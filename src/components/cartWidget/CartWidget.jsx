import { Box } from '@chakra-ui/react';
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Box mr={3}>
      <Link to='/cart'><IoCartSharp /></Link>

    </Box>
  )
}

export default CartWidget
