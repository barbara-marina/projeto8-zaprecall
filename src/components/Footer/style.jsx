import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 70px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 15px 0;
`;
export const Scoreboard = styled.footer`
    display: flex;
    justify-content: center;
    ion-icon {
        width: 23px;
        height: 23px;
        margin-top: 10px;
    }
    ion-icon[name="close-circle"] {
        color: #FF3030;
    }
    ion-icon[name="help-circle"] {
        color: #FF922E;
    }
    ion-icon[name="checkmark-circle"] {
        color: #2FBE34;
    }
`;
export const Button = styled.button`
    width: 167px;
    height: 32px;
    background: #FB6B6B;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-family: 'Recursive';
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;
`;