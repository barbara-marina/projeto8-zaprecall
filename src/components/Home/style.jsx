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
    font-family: 'Righteous';
    font-weight: 400;
`;
export const Image = styled.image`
    width: 136px;
    height: 161px;
    background-image: url(${img});
`;
export const Text = styled.h1`    
    font-size: 36px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0 10vh 0;
`;
export const Button = styled.button`
    width: 246px;
    height: 54px;
    background-color: #FFFFFF;
    color: #D70900;
    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
`;