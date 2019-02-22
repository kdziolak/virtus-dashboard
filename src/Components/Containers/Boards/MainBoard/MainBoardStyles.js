import styled from 'styled-components'
import Calendar from 'react-calendar'

export const StyledMainBoard = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 15vh;
    @media screen and (orientation:landscape) and (min-width: 520px) {
        margin-left:auto;
        margin-right: auto;
        width: 85%;
        margin-top: 10vh;
        margin-bottom: 20vh;
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        width: calc(100vw - 10rem);
        margin:0;
        padding-top: 0vh;
        margin-left: auto;
        padding-right:2rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width: calc(100vw - 10rem);
        margin:0;
        padding-top: 0vh;
        margin-left: auto;
        padding-right:2rem;
    }
`

export const StyledCalendarContainer = styled(Calendar)`
    background-color: red;
`
export const FlexContainer = styled.div`
     @media screen and (orientation:landscape) and (min-width: 1024px){
        display:flex;
        width:100%;
        align-items:center;
        justify-content: space-between;
        margin-top: 1.5rem;
    }
`