import styled from 'styled-components'

export const StyledCardPanel = styled.div`
    position:relative;
    margin-top: 4vh;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    height: 55vh;
    background-color: #2e3141;
    overflow: hidden;
    box-shadow: 0 0 30px -10px black;
    @media screen and (orientation: landscape) and (min-width: 560px){
        height: 75vh
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        height: ${({ headerTitle }) => (headerTitle === 'calendar') ? '40vh' : '45vh'};
        &:last-child{
            margin-bottom:5vh;
        }
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width:${({ headerTitle }) => (headerTitle === 'calendar' || headerTitle === 'Inbox') ? '28%' : '28%'};
        height: ${({ headerTitle }) => (headerTitle === 'calendar' || headerTitle === 'Inbox') ? '40vh' : '45vh'};
        padding:0;
        margin:0;
    }
`

export const ProjectsBox = styled.section`
    width: 100%;
    height: 80%;
    align-items:center;
    overflow-y: scroll;
`