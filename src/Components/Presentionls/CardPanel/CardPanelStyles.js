import styled from 'styled-components'

export const StyledCardPanel = styled.div`
    position:relative;
    margin-top: 8vh;
    margin-left: 7.5%;
    width: 85%;
    height: 55vh;
    background-color: #2e3141;
    overflow: hidden;
    @media screen and (orientation: landscape) and (min-width: 560px){
        height: 75vh
    }
    @media screen and (min-width: 1024px){
        width:${({ headerTitle }) => (headerTitle === 'calendar' || headerTitle === 'Inbox') ? '28%' : '23%'};
        height: ${({ headerTitle }) => (headerTitle === 'calendar' || headerTitle === 'Inbox') ? '40vh' : '45vh'};
        padding:0;
        margin:0;
    }
`

export const ProjectsBox = styled.section`
    width: 100%;
    height: 80%;
    overflow-y: scroll;
`