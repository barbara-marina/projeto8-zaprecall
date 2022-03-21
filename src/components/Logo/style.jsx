import styled from "styled-components";
import img from "../../assets/img/minilogo.png";

export const Container = styled.div`
    width: 100vw;
    height: 66px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: #FB6B6B;
`;

export const LogoImage = styled.image`
    width: 26px;
    height: 30px;

    background-image: url(${img});
`;

export const LogoText = styled.h1`
    width: 101px;
    height: 22px;   
    
    font-family: 'Righteous';
    font-size: 20px;
    font-weight: 400;
    text-align: center;

    color: #FFFFFF;
`;