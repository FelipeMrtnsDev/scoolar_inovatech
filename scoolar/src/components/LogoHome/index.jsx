import { Link } from "react-router-dom"
import logoScoolar from "../../assets/images/logoScoolar.png"
import { ButtonContainer, Image } from "./styles"

function LogoHome() {
    return(
        <>
            <Image>
                <img src={logoScoolar} alt={logoScoolar} />
            </Image>
            <ButtonContainer>
                <Link className="button" to="/register">Cadastrar-se</Link>
                <Link className="button" to="/login">Fazer login</Link>
            </ButtonContainer>
        </>
    )
}

export default LogoHome