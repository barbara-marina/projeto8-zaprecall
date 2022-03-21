import styled from "styled-components";
import image from "./../../assets/img/turned.png"

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
    align-items: end;

    padding: 15px 10px;
    margin: 0 11px;
    
    ion-icon {
        width: 17px;
        height: 17px;

        cursor: pointer;

        color: #333333;
    }
`;

export const Text = styled.h2`
    width: 100%;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    text-align: left;

    color: #333333;
`;

export const Image = styled.image`
    width: 20px;
    height: 13px;

    cursor: pointer;
    background-image: url(${image});

`;