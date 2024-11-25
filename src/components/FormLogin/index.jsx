import { useNavigate } from "react-router-dom"
import { EntrarUsando, FormContainer, Input } from "./styles"

function FormLogin() {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/lobby")
    }

    return(
        <FormContainer>
            <form onSubmit={handleClick}>
                <div className="titulo">
                    <h1>Insira os seus dados</h1>
                </div>
                <Input>
                    <input type="email" required placeholder="Login" />
                </Input>
                <Input>
                    <input type="password" required placeholder="Senha" />
                </Input>
                <div className="button-entrar">
                    <button type="submit">Entrar</button>
                    <a href="#">Esqueci minha senha</a>
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

export default FormLogin