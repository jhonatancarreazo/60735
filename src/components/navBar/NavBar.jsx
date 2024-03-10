import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Heading 
  } from '@chakra-ui/react'
  import { FaChevronDown } from "react-icons/fa";
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <Heading className='logo'>Comisión 60735</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem>Remeras</MenuItem>
                <MenuItem>Buzos</MenuItem>
                <MenuItem>Zapatillas</MenuItem>
                <MenuItem>Pijamas</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </nav>
  )
}

export default NavBar
