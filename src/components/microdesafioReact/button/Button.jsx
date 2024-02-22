import React from 'react'
import './Button.css'
const Button = () => {
  const handleClick = () => {
    alert('hiciste click')
  }

  return (
    <>
      <button className='button' onClick={handleClick}>Botón</button>
    </>

  )
}

export default Button
