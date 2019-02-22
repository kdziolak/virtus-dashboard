import styled from 'styled-components'

export const StyledCardHeader = styled.header`
    height: 20%;
    width: 100%;
    background-color: #3a3e52;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (orientation: landscape) and (min-width: 520px){
        height: 25%;
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        height: 18%;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        height: 20%;
    }
`