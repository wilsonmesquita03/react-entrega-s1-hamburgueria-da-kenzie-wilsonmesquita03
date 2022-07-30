import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        
        --gray-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --Negative: #E60000;
        --Warning: #FFCD07;
        --Sucess: #168821;
        --Information: #155BCB;
    }
    
    body, h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-weight: bold;
        font-size: 26px;
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
    }

    h3 {
        font-weight: bold;
        font-size: 18px;
    }

    h4 {
        font-weight: bold;
        font-size: 14px;
    }

    h5 {
        font-weight: 400;
        font-size: 16px;
    }

    h6 {
        font-weight: 400;
        font-size: 14px;
    }

    span {
        font-weight: 600;
        font-size: 14px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--grey-50);
    }

    button {
        font-weight: 600;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .button--green {
        background-color: var(--Color-primary);
        color: var(--grey-0);
    }

    .button--green:hover {
        background-color: var(--Color-primary-50);
    }

    .button--grey {
        background-color: var(--grey-20);
        color: var(--grey-50);
    }

    .button--grey:hover {
        background-color: var(--grey-50);
        color: var(--grey-20);
    }
    
`

export default GlobalStyle