import styled from "styled-components";
import { cores } from "../../styles/styles"

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;

    & .titulo {
        display: flex;
        justify-content: center;
    }

    & h1 {
        color: ${cores.cinza200};
        flex-wrap: nowrap;
        font-size: 26px;
    }

    & form {
        gap: 16px;
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    & .button-entrar {
        display: flex;
        flex-direction: column;
        align-items: center;

        & a {
            text-decoration: none;
            color: ${cores.cinza100};
        }
    }

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        border: none;
        padding: 8px;
        border-radius: 4px;
        background-color: ${cores.cinza300};
        color: ${cores.cinza100};
        font-weight: 700;
        margin-bottom: 16px;

        &:hover {
            background-color: ${cores.azulmain};
            color: ${cores.branco};
        }
    }
`

export const Input = styled.div`
    display: flex;
    
    & input {
        background-color: ${cores.cinza300};
        border-radius: 4px;
        border: 1px solid ${cores.cinza100};
        color: ${cores.branco};
        padding: 6px;
        width: 100%;

        &:focus {
            outline: 1px solid ${cores.cinza100};
        }

        &::placeholder {
            color: ${cores.cinza100};
            font-weight: 700;
        }
    }
`

export const EntrarUsando = styled.div`
    display: flex;
    flex-direction: column;

    & p {
        color: ${cores.cinza100};
        display: flex;
        justify-content: center;
    }

    & .redes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 16px;

        & div {
            padding: 26px;
            background-color: ${cores.branco};
            border-radius: 4px;
        }

        & .esquerda {
            margin-right: 8px;
        }

        & .direita {
            margin-left: 8px;
        }
    }
`