import { createGlobalStyle } from 'styled-components';
import background from './images/clouds.JPG';
const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        color: pink;
        font-family: "Courgette", sans-serif;
        font-size: 1.15em;
        margin: 0;
    }
`;

export default GlobalStyles;