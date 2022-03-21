import styled from "styled-components";
import img from "./../../assets/img/logo.png";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled.image`
    width: 55px;
    height: 65px;

    background-image: url(${img});
`;

export const LogoText = styled.h1`
    width: 152px;
    height: 35px;   
    
    font-family: 'Righteous';
    font-size: 25px;
    font-weight: 400;
    text-align: center;

    color: #FFFFFF;
`;

export const StartButton = styled.button`
    width: 141px;
    height: 31px;

    background-color: #FFFFFF;
    color: #D70900;

    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    margin-top: 19.16vh;

    cursor: pointer;
`;