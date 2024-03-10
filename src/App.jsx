
import './App.css'
import Button from './components/microdesafio/Button'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/itemCount/ItemCount'

function App() {


  return (
    <ChakraProvider>

      {/* para que este botón funcione, tienen que quitar el children */}
      {/* <Button 
        color= 'blue'
        label= 'clickeá'
        onClickCallback = {() => alert ('Ahora voy a cambiar de color')}
        style= {{ borderRadius: '8px', margin: '10px', fontSize:'16px'}}
        disabled= {false}
      /> */}
       <Button
        color= 'blue'
        onClickCallback = {() => alert ('Ahora voy a cambiar de color')}
        style= {{ borderRadius: '8px', margin: '10px', fontSize:'16px'}}
        disabled= {true}
      >
      clickeá
      </Button>
      <ItemCount stock={5} initialValue={1}/> 

    </ChakraProvider>
  )
}

export default App
