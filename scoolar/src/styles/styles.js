import { createGlobalStyle } from "styled-components";

export const cores = {
    azulbackground: "#0a0f18",
    azulmain: "#009da0",
    cinza200: "#5d6169",
    cinza100: "#7b8089",
    cinza300: "#39414e",
    branco: "#f4f9fd"
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    body {
        background-color: ${cores.azulbackground};
    }
`;