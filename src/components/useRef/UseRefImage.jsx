import React, { useRef, useState } from 'react'

const UseRefImage = () => {
    const imageRef = useRef()
    const [ isZoomed, setIsZoomed] = useState(false)

    const handleClick = () => {
        if(isZoomed) {
            imageRef.current.style.transform = 'scale(1)'
        }else{
            imageRef.current.style.transform = 'scale(2)'
        }
        setIsZoomed(!isZoomed)
    }

  return (
    <div>
        <img 
            src='https://i.blogs.es/eaf5dd/rick-morty/840_560.jpeg' 
            onClick={handleClick} 
            ref={imageRef}
            style={{
                transition:'transform 0.3s',
                cursor: 'pointer'
            }}
            />
    </div>
  )
}

export default UseRefImage
