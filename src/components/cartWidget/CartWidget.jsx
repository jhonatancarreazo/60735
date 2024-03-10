import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div >
      <IoCartSharp  className='cartWidget'/><span>3</span>

    </div>
  )
}

export default CartWidget
