import styled from "styled-components";

const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--grey-0);
    
    height: 80px;

    .imgAndInfo{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    border-radius: 4px;

    overflow: hidden;

    background-color: var(--grey-20);

    img {
        object-fit: cover;
        width: 70px;
        height: 70px;
    }
`

const DivInfo = styled.div`
    height: 90%;
`

const DivButton = styled.div`
    height: 90%;

    button {
        background-color: transparent;

        font-weight: 500;
        font-size: 12px;
        color: #BDBDBD;
    }
`



export { Container, DivImg, DivInfo, DivButton }