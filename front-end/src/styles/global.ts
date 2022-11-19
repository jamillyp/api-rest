import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #2F2E41;
        --white: #fff;

        //adding colors
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1083px) {
            font-size: 93.75%; 
        }
        @media (max-widtg: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Open Sans';
    }

    button {
        cursor: pointer;
    }

    body {
        background: var(--background);
    }
`;