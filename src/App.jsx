import Rotas from "./routes"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter> 
    </>
  )
}

export default App
