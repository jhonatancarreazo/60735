import Button from "./components/microdesafioReact/button/Button"
import ButtonParams from "./components/microdesafioReact/buttonParams/ButtonParams"

function App() {

  return (
    <>
      <Button/>
      <ButtonParams 
        texto='Clickea'
        clase='btn'
        id='btn'
        deshabilitado={false}
      />
      
    </>
  )
}

export default App
