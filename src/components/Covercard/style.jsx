import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    max-width: 340px;
    height: 40px;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 6px;
    margin: 0 11px;
    
    ion-icon {
        width: 13px;
        height: 15px;

        cursor: pointer;

        color: #333333;
    }
`;

export const Title= styled.h2`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 12px;

    color: #333333;
`;