import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Lobby from "./pages/Lobby"
import Sala from "./pages/Sala"

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/sala/:id" element={<Sala  />} />
        </Routes>
    )
}

export default Rotas