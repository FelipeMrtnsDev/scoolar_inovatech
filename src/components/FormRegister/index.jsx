import { useNavigate } from "react-router-dom"
import { EntrarUsando, FormContainer, Input } from "./styles"

function FormRegister() {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/login")
    }

    return(
        <FormContainer>
            <form>
                <div className="titulo">
                    <h1>Cadastre-se</h1>
                </div>
                <Input>
                    <input type="email" required placeholder="Login" />
                </Input>
                <Input>
                    <input type="password" required placeholder="Senha" />
                </Input>
                <Input>
                    <input type="password" required placeholder="Confirmar senha" />
                </Input>
                <div className="button-entrar">
                    <button onClick={handleClick}>Registrar Conta</button>
                    <a onClick={() => navigate("/login")}>Já possuo conta/Realizar Login</a>
                </div>
            </form>
            <EntrarUsando>
                <p>Entrar usando</p>
                <div className="redes">
                    <div className="esquerda"></div>
                    <div className="direita"></div>
                </div>
            </EntrarUsando>
        </FormContainer>
    )
}

export default FormRegister