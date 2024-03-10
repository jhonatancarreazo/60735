import React from 'react'
import OtroComponenteChildren from './OtroComponenteChildren'

const EjemploChildren = ({children}) => {
  return (
    <div>
      {children}
      <OtroComponenteChildren />
    </div>
  )
}

export default EjemploChildren
