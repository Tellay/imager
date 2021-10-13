import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    
    :root {
        --background: #121212;
        --box: #181818;
        --title: #D4D4D4;
        --subtitle: #b5b5b5;
        --border: #8257e5;
        --icon: #979797;
        --white: #FFFFFF;
        --black: #000000;
        --red: #ED4245;
        --button: #8257e5;
        --button--hover: #7545E5;
        --button--focus: rgba(150, 105, 255, .15);
        --button--blocked: #353535;
        --button--copy: #3ea6ff;
        --background--shadow: rgba(1, 1, 1, .5);
    }

    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center; 
        background: var(--background);
    }
`;