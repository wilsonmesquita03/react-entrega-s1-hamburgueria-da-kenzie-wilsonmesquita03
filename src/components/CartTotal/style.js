import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    padding-bottom: 20px;

    background-color: var(--grey-0);

    div {
        align-self: center;
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-top: 1rem;
    }

    button {
        align-self: center;
        width: 90%;
        height: 60px;
    }
`

export { Container }