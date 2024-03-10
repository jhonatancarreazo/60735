import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title='Tienda' />
    </ChakraProvider>
  )
}

export default App
