import styled from "styled-components"
import { cores } from "../../styles/styles"

export const Image = styled.div`
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & img {
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 80px;

    & .button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        padding: 8px;
        font-size: 32px;
        font-weight: 700;
        background-color: ${cores.azulmain};
        border: none;
        border-radius: 8px;
        text-decoration: none;
        color: ${cores.azulbackground};
    }
`