import { FormContainer } from "./styles"

function FormLogin() {
    return(
        <FormContainer>
            <form>
                <h1>Insira os seus dados</h1>
                <div>
                    <p>Login</p>
                    <input type="email" required />
                </div>
                <div>
                    <p>Senha</p>
                    <input type="password" required />
                </div>
                <button type="submit">Entrar</button>
                <a href="#">Esqueci minha senha</a>
            </form>
            <div>
                <p>Entrar usando</p>
                <div></div>
                <div></div>
            </div>
        </FormContainer>
    )
}

export default FormLogin