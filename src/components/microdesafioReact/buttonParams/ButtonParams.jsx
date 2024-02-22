import React from 'react'

const ButtonParams = ({ texto,clase,id,deshabilitado }) => {
    const handleClick = () => {
        alert('hola mundo')
    }

  return (
    <div>
      <button id={id} className={clase} deshabilitado={deshabilitado} onClick={handleClick}>
        {texto}
      </button>
    </div>
  )
}

export default ButtonParams
