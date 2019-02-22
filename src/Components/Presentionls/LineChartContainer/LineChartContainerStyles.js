import styled from 'styled-components'

export const StyledLineChartContainer = styled.div`
    margin-top: 30px;
    width: 85%;
    min-height: 50vh;
    margin-left: auto;
    margin-right: auto;
    margin-top:12vh;
    background-color: #2f3242;
    padding: 3%;
    overflow-x: hidden;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    position:relative;
    box-shadow: 0 0 30px -10px black;
    @media screen and (orientation:portrait) and (min-width: 720px){
        margin-top:3vh;
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        min-height:10vh;
        max-height:60vh;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width: 70%;
        padding: 0%;
        min-height:10vh;
        max-height:50vh;
        margin:0;
    }
`

export const StyledChart = styled.div`
    width: 100%;
    min-height: 20vh;
    overflow-x: scroll;
    @media screen and (orientation:landscape) and (min-width: 1024px){
        min-height: 10vh;
        height:45vh;
    }
`
export const Scroll = styled.div`
    width: 250%;
    min-height: 35vh;
    overflow: hidden;
    @media screen and (orientation: portrait) and (min-width: 760px){
        min-height: 25vh;
        width: 130%;
        height: 100%;
    }
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
    @media screen and (orientation: portrait) and (min-width: 760px){
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
    @media screen and (orientation: portrait) and (min-width: 760px){
        width:45%;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width:40%;
    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
       width:30%;
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
    @media screen and (orientation: portrait) and (min-width: 760px){
        width:25%;
        padding: 4% 0%;
        margin-left: 2rem;
        &:nth-child(1){
            margin-left:0;

        }
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width:25%;
        padding:4% 0%;
        margin-left: 2rem;
        justify-content: flex-start;
        position:absolute;
        &:nth-child(1){
            top:0;
            left:0;
        }
        &:nth-child(2){
            top:0;
            left:15rem;
        }
        &:nth-child(3){
            top:0;
            left:30rem;
        }
        
    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
        &:nth-child(1){
            top:0;
            left:0;
        }
        &:nth-child(2){
            top:0;
            left:18rem;
        }
        &:nth-child(3){
            top:0;
            left:36rem;
        }
        
    }
`