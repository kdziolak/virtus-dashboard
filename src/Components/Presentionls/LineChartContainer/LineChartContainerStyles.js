import styled from 'styled-components'

export const StyledLineChartContainer = styled.div`
    margin-top: 30px;
    width: 85%;
    min-height: 50vh;
    margin-left: auto;
    margin-right: auto;
    background-color: #2f3242;
    padding: 3%;
    overflow-x: hidden;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    position:relative;
    box-shadow: 0 0 30px -10px black;
    
`

export const StyledChart = styled.div`
    width: 100%;
    min-height: 35vh;
    overflow-x: scroll;
`
export const Scroll = styled.div`
    width: 250%;
    min-height: 35vh;
    overflow: hidden;
    @media screen and (orientation: landscape) and (min-width: 550px){
        width: 130%;
        height: 100%;
    }
`
export const FlexContainer = styled.div`
    width: 100%;
    @media screen and (orientation: landscape) and (min-width: 550px){
        display: flex;
        align-items:center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`

export const Progressbar = styled.div`
    width: 25%;
    @media screen and (orientation: landscape) and (min-width: 550px){
        width:35%;
    }
`
export const ProgressbarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7% 5%;
    @media screen and (orientation: landscape) and (min-width: 550px){
        width:40%;
        padding: 4% 0%;
        margin-left: 5%;
    }
`