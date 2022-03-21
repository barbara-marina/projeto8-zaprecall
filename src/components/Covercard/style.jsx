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
        width: 17px;
        height: 17px;
    }
    ion-icon[name="play-outline"] {
        color: #333333;
        cursor: pointer;
    }
    ion-icon[name="close-circle"], .close-circle{
        color: #FF3030;
        text-decoration: line-through;
    }
    ion-icon[name="help-circle"], .help-circle {
        color: #FF922E;
        text-decoration: line-through;
    }
    ion-icon[name="checkmark-circle"], .checkmark-circle {
        color: #2FBE34;
        text-decoration: line-through;
    }
`;

export const Title= styled.h2`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 12px;
    color: #333333;
`;