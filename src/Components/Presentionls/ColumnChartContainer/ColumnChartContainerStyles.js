import styled from 'styled-components'

export const StyledColumnChartContainer = styled.div`
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
    @media screen and (min-width: 1024px){
        width: 40%;
        min-height:0;
        height:40vh;
        padding: 0%;
        margin:0;
        overflow-y:hidden;
        justify-content:space-between;
    }

`
export const StyledChart = styled.div`
    width: 100%;
    min-height: 35vh;
    margin-top: 2rem;
    overflow-x: scroll;
    @media screen and (min-width: 1024px){
        width: 100%;
        overflow-y:hidden;
        min-height: 0;
        margin:0;
        padding:0;
    }
`
export const Scroll = styled.div`
    width: 250%;
    min-height: 35vh;
    overflow: hidden;
    @media screen and (min-width: 1024px){
        width: 150%;
        min-height: 25vh;
        max-height:35vh;
        margin:0;
        padding:0;
    }
`

export const Title = styled.h2`
    font-size: 1.7rem;
    width: 50%;
`

export const FlexContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 1024px){
        padding: 1rem 2rem;
    }
`