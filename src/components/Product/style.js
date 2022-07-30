import styled from "styled-components";

const ContainerLi = styled.li`
    min-width: 300px;
    height: 346px;

    box-sizing: border-box;
    
    overflow: hidden;
    
    border-radius: 8px;
    border: 2px solid  var(--grey-20);
`

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 45%;
    background-color: var(--grey-0);

    img {
        width: 150px;
        max-height: 100%;
        object-fit: cover;
    }
`

const DivInfo = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey-20);
    width: 100%;
    height: 55%;

    button {
        width: 106px;
        height: 40px;
    }

    h6 {
        color: var(--Color-primary);
        font-weight: 600;
        font-size: 14px;
    }
`

export { DivImg, DivInfo, ContainerLi }