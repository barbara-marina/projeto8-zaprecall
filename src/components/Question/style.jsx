import styled from "styled-components";
import image from "./../../assets/img/turn.png"

export const Container = styled.div`
    width: 90vw;
    max-width: 340px;
    height: 131px;
    background: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 18px 15px;
`;
export const Text = styled.h2`
    width: 100%;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    color: #333333;
`;
export const Image = styled.image`
    width: 30px;
    height: 20px;
    background-image: url(${image});
    cursor: pointer;
`;