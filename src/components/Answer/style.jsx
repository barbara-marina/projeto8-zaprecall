import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    max-width: 340px;
    height: 80px;
    background: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 10px;
    margin: 0 11px;
`;

export const Text = styled.h2`
    width: 100%;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: justify;
    color: #333333;
`;

export const Button = styled.button`
    width: 32%;
    min-height: 24px;
    font-weight: 400;
    font-size: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #FFFFFF;
`;

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;

`;