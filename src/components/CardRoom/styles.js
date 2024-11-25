import styled from "styled-components";
import { cores } from "../../styles/styles";

export const PlataformContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & div {
        background-color: ${cores.cinza300};
        width: 120px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-bottom: 24px;
        
        &.activated {
            background-color: ${cores.azulmain};

            & h3 {
                color: ${cores.branco};
            }
        }

        & h3 {
            color: ${cores.cinza100};
            font-weight: 200;
        }
    }
`;
