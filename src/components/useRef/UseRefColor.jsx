import React, { useRef } from 'react'

const UseRefColor = () => {
// useRef: es un hook que nos permite acceder al dom e interactuar con los nodos.

    const myRef = useRef()

    const handleClick = () => {
        myRef.current.style.backgroundColor = 'blue'
    }

  return (
    <div>
        <div ref={myRef}>Este es un elemento referenciado</div>
        <button onClick={handleClick}>Cambiar el color</button>
    </div>
  )
}

export default UseRefColor
