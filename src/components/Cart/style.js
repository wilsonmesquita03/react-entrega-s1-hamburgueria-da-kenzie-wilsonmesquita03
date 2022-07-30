import styled from "styled-components";

const ContainerCart = styled.section`
    margin: 0;
    padding: 0;
    min-width: 382px;
    margin-top: 2rem;

    @media (max-width: 424px){
        min-width: 100%;
    }

    .cart {

    }

    .cart--header {
        display: flex;

        justify-content: flex-start;
        align-items: center;

        width: auto;
        height: 65px;

        background-color: var(--Color-primary);
        color: var(--grey-0);

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .cart--header > h3 {
        margin-left: 1rem;
    }

    .cart--content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 158px;
        background-color: var(--grey-0);
    }

`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem 0.5rem;

    max-height: 300px;

    overflow-y: scroll;

    border-bottom: 2px solid var(--grey-20);

    background-color: var(--grey-0);
`

export { ContainerCart, Ul }