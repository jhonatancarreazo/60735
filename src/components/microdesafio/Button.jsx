import React, { useState } from 'react'

// Como el componente se llama Button, nos daría error al importar Button de chakra.
// Para evitar ese error, se pueden renombrar las importaciones para evitar conflictos entre la importación y el nombre del componente
import { Button as ButtonChakra } from '@chakra-ui/react'
import './Button.css'
const Button = ({color, label, onClickCallback, children, style, disabled}) => {

    const [background, setBackground] = useState(color)

    const handleClick = () => {
        
        if (onClickCallback){
            onClickCallback()
        }
        // setBackground('green')
        setBackground(prevColor => (prevColor === 'green' ? color : 'green'))
    }

  return (
    <div>
        <ButtonChakra 
            size='md'
            style={{
                background,
                ...style,
            }}
            onClick={handleClick}
            disabled={disabled}
            >
            {children}
        </ButtonChakra>
    </div>
  )
}

export default Button
