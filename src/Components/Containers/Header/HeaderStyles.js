import styled from 'styled-components';


export const StyledHeader = styled.header`
    flex-grow: 1;
    width: 100%;
    height:9vh;
    background-color: #2f3242;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    position: fixed;
    z-index:1;
    @media screen and (orientation:landscape) and (min-width: 520px){
        height: 15vh;
        justify-content: space-between;
    }
    @media screen and (orientation:portrait) and (min-width: 760px){
        height: 8vh;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        height:9vh;
        justify-content: space-between;
    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
        height:8vh;
        justify-content: space-between;
    }
`

export const LeftSide = styled.div`
    width: 50%;
`

export const RightSide = styled.div`
    width: 50%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media screen and (orientation:portrait) and (min-width: 760px){
        width:35%;
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        width:40%;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width:38%;
    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
        width:25%;
    }
   
`

export const NoneDisplayAvatar = styled.div`
    display: block;
    @media screen and (min-width:768px) {
        display: block;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        display:block;
    }
    
`

export const IconsContainer = styled.div`
        display:flex;
        width:100%;
        justify-content:space-around;
    @media screen and (orientation:landscape) and (min-width: 1024px){
        display:flex;
        width:45%;
        justify-content:space-around;
    }
    
` 