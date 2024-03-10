import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
import NavBar from './components/navBar/NavBar'
// import Microdesafio from './components/Microdesafio/Microdesafio'
// import EjemploChildren from './components/Children/EjemploChildren'
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title='Tienda' />
      <ItemCount />

      
      {/* useRef */}

      {/* <UseRefColor /> */}
      {/* <UseRefInput /> */}
      {/* <UseRefImage /> */}


      {/* microdesafio */}

      {/* <Microdesafio /> */}


      {/* Children */}

      {/* <EjemploChildren >
        Ejemplo 1
      </EjemploChildren> */}
    </ChakraProvider>
  )
}

export default App
