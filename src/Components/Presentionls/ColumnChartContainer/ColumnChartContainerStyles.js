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
`

export const Title = styled.h2`
    font-size: 1.7rem;
    width: 50%;
`

export const FlexContainer = styled.h2`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`