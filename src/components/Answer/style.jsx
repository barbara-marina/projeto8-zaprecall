import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    max-width: 340px;
    min-height: 131px;
    background: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 15px;
`;
export const Text = styled.h2`
    width: 100%;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: justify;
    color: #333333;
`;
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;

`;
export const Button = styled.button`
    width: 30%;
    min-height: 38px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    padding: 5px 10px;
    margin: 10px 0;
`;