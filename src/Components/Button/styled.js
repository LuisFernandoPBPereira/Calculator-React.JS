import styled from "styled-components";

export const Button = styled.button`
    height: 10vh;
    border: 1px solid #2F2F2F;
    border-radius: 9999px;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    background-color: #9900FF;
    color: white;
    transition: 0.5s;

    &:hover{
        filter: brightness(2.0);
        transition: 0.5s;
    }

    @media(max-height: 450px){
        height: 20vh;
    }
`