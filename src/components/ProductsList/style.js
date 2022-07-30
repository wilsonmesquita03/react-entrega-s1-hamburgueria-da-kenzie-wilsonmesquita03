import styled from "styled-components";

const ContainerUl = styled.ul`
    display: flex;
    max-width: 100%;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 1172px){
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`

export { ContainerUl }