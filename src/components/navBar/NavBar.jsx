import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src='https://imagenes.elpais.com/resizer/GEdUdZEMg8Dxkjqg4yaVFsq5ga0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LKBJXYFNZFA4ZOPCAUZZBXZMQA.PNG' style={{width : '150px'}} />
        </div>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem>Remeras</MenuItem>
                <MenuItem>Buzos</MenuItem>
                <MenuItem>Pijamas</MenuItem>
                <MenuItem>Zapatillas</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </div>
  )
}

export default NavBar
