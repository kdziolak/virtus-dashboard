import styled from 'styled-components'

export const StyledNotificationCircle = styled.div`
    position: absolute;
    top: ${({ top }) => top ? top : '8px'};
    right: ${({ right }) => right ? right : '0px'};
    width: ${({ size }) => size ? size : '12px'};
    height: ${({ size }) => size ? size : '12px'};
    border: 2px solid black;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#2196f3'};
    border-radius: 50%;
` 