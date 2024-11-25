import styled from "styled-components"
import { cores } from "../../styles/styles"

export const CardRoomContainer = styled.div`
    margin: 32px;
`;

export const ImageUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 16px;
    margin-top: 32px;

    & .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & svg {
        color: ${cores.cinza100};
        font-size: 40px;
    }

    & .image-user {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid ${cores.cinza100};
    }

    & h1 {
        color: ${cores.cinza100};
        font-size: 24px;
    }
`;

export const SalasText = styled.div`
    margin-bottom: 16px;

    & h2 {
        color: ${cores.cinza100};
    }
`;

export const PlataformContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 24px;
    padding-top: 40px;
    border-radius: 4px;
    background-color: ${cores.branco};
`;

export const BotaoEntrar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 30%;

    & button {
        width: 100%;
        border: none;
        padding: 8px;
        border-radius: 4px;
        background-color: ${cores.cinza300};
        color: ${cores.cinza100};
        font-weight: 700;
    }
`;

