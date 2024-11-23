import { EntrarUsando, FormContainer, Input } from "./styles"

function FormRegister() {

    const handleClick = (e) => {
        e.preventDefault()
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
                    <button onSubmit={handleClick} type="submit">Entrar</button>
                    <a href="#">Já possuo conta/Realizar Login</a>
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