import styled from "styled-components";

export const Container = styled.div`
    min-width: 200px;
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10vh;
    
    background-color: #2F2F2F;
    color: white;
    font-weight: 700;

    @media(max-height: 450px){
        h1{
            display: none;
        }
    }
`

export const Content = styled.div`
    background-color: #2F2F2F;
    width: 20%;

    @media (max-width: 880px){
        width: 60%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`