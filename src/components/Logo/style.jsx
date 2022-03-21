import styled from "styled-components";
import img from "../../assets/img/minilogo.png";

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #FB6B6B;
`;
export const Image = styled.image`
    width: 52px;
    height: 60px;
    background-image: url(${img});
`;
export const Text = styled.h1`
    font-family: 'Righteous';
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
    margin-left: 15px
`;