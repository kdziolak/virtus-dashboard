import styled from 'styled-components'

export const StyledNotificationCircle = styled.div`
    position: absolute;
    top: .7rem;
    right: ${({ right }) => right === 'header' ? '0rem' : '1.5rem'};
    width: ${({ size }) => size ? size : '1.2rem'};
    height: ${({ size }) => size ? size : '1.2rem'};
    border: 2px solid black;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#2196f3'};
    border-radius: 50%;
    @media screen and (orientation: portrait) and (min-width: 400px){
        top: .6rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '2.2rem'};
    }
    @media screen and (orientation: portrait) and (min-width: 760px){
        top: .2rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '3.6rem'};
    }
    @media screen and (orientation: landscape) and (min-width: 550px){
        top: .7rem;
        right:${({ right }) => right === 'header' ? '0rem' : '4.6rem'};
    }
    @media screen and (orientation: landscape) and (min-width: 640px){
        top: .8rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '5.6rem'};
    }
    @media screen and (orientation: landscape) and (min-width: 730px){
        top: .8rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '6.3rem'};
    }
    @media screen and (orientation: landscape) and (min-width: 820px){
        top: .4rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '5.6rem'};
    }
    @media screen and (min-width: 1024px){
        top: .4rem;
        right: ${({ right }) => right === 'header' ? '0rem' : '1.7rem'};
    }
    
` 