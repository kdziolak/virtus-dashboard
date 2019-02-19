import styled from 'styled-components';


export const StyledHeader = styled.header`
    flex-grow: 1;
    width: 100%;
    height:9vh;
    background-color: #2f3242;
    display: flex;
    align-items:center;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    position: fixed;
    z-index:1;
    @media screen and (min-width: 1024px){
        justify-content: space-between;
    }
`

export const LeftSide = styled.div`
    width: 65%;
    @media screen and (min-width: 768px){
        width:50%;
    }
    @media screen and (orientation: landscape) and (min-width: 550px){
        width:50%;
    }
`

export const RightSide = styled.div`
    width: 35%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    @media screen and (min-width:768px){
        width:50%;
    }
    @media screen and (orientation: landscape) and (min-width: 550px){
        width:50%;
    }
    @media screen and (min-width: 1024px){
        width:38%;
    }
   
`

export const NoneDisplayAvatar = styled.div`
    display: block;
    @media screen and (min-width:768px) {
        display: block;
    }
    @media screen and (min-width: 1024px){
        display:block;
    }
    
`