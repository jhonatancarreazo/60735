import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Heading,
    Box
  } from '@chakra-ui/react'
  import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'
const NavBar = () => {
  return (
    <Box className='nav' p={1} boxShadow='xs' bg='white' mb='50px'>
        <Heading ml={3}><Link to='/'>Ethnos Shoes</Link></Heading>
        <Menu>
           
            <Link to={'/category/Remeras'} >New Arrivals</Link>
            <Link to={'/category/Buzos'}>Shoes</Link>
            <Link to={'/category/Pijamas'}>Sandals</Link>
            <Link to={'/category/Zapatillas'}>Accesories</Link>
            <Link to={'/category/Remeras'}>Sale</Link>
            </Menu>
            <CartWidget/>
    </Box>
  )
}

export default NavBar
