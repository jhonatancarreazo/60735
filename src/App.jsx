import { ChakraProvider } from '@chakra-ui/react'
import CountryInfo from './components/microdesafio/CountryInfo'
import Acronimo from './components/microdesafio/Acronimo'
import Pokemon from './components/microdesafio/Pokemon'
import ItemCount from './components/itemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import WithLogging from './components/hoc/WithLogging'

function App() {

    const WrappedComponente = CountryInfo 
    const ComponentWithLogging = WithLogging(WrappedComponente)

  return (
    <ChakraProvider>
      {/* <CountryInfo />
      <Acronimo />
      <Pokemon /> */}
      <ItemCount stock={10} initialValue={1} />
      <ItemListContainer />

      <ComponentWithLogging />
    </ChakraProvider>
  )
}

export default App
