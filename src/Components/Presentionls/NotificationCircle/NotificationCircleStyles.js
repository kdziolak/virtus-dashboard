import styled from 'styled-components'

export const StyledNotificationCircle = styled.div`
    position: absolute;
    top: .7rem;
    right: ${({ right }) => right === 'header' ? '-1.3rem' : '-1.8rem'};
    width: ${({ size }) => size ? size : '1.2rem'};
    height: ${({ size }) => size ? size : '1.2rem'};
    border: 2px solid black;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#2196f3'};
    border-radius: 50%;
    @media screen and (orientation:portrait) and (min-width: 720px){
        top: .2rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        top: .4rem;
    }
` 