import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-0);

    width: 100vw;
    min-height: 80px;

    > div > img {
        width: 150px;
        height: 60px;
    }

    @media (max-width: 585px){
        > div{
            flex-direction: column;
            align-items: center;
        }
    }

    div {
        width: 90%;
        display: flex;

        justify-content: space-between;
    }
`

export { HeaderContainer }