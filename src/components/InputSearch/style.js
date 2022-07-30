import styled from "styled-components";

const Container = styled.form`
    width: fit-content;
    position: relative;

    input {
        box-sizing: border-box;

        height: 60px;
        width: 90vw;
        max-width: 382px;


        border-radius: 8px;
        border: 2px solid var(--grey-20)

    }

    input:focus {
        border-color: var(--grey-100);
    }

    button {
        position: absolute;
        right: 10px;
        top: 10px;
        
        padding: 0px 20px 0px 20px;
        
        box-sizing: border-box;
        height: 40px;
        width: 130px;
    }
`

export { Container }