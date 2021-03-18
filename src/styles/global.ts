import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html { //CONFIG. TODAS AS APLICAÇÕES
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
//se a tela do usuario for menor que
    @media (max-width: 720px) { 
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

input, body, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

h1 {
    color: #8257e6;
}

button {
    cursor: pointer;
}

[disabled] { 
    opacity: 0.6;
    cursor: not-allowed; //mostra quando não é permitido clicar
}

`