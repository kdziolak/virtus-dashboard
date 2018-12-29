import styled from 'styled-components';


export const StyledHeader = styled.header`
    flex-grow: 1;
    width: 100%;
    background-color: #2f3242;
    display: flex;
    align-items:center;
    padding-left: 5vw;
    padding-right: 5vw;
`

export const LeftSide = styled.div`
    width: 65%;
    @media screen and (min-width: 520px){
        width:75%;
    }
`

export const RightSide = styled.div`
    width: 35%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    @media screen and (min-width: 520px){
        width:25%;
    }
   
`

export const NoneDisplayAvatar = styled.div`
    display: none;
    @media screen and (min-width:520px) {
        display: block;
    }
`