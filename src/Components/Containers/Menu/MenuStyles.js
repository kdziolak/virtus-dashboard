import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledMenu = styled.nav`
    width: 100%;
    height: 9vh;
    background-color: #2f3242;
    position: fixed;
    bottom: 0;
    left:0;
    z-index:1;
    @media screen and (orientation: landscape) and (min-width: 550px){
        width: 100%;
        height: 14vh;
    }
`

export const StyledUl = styled.ul`
    position: relative;
    list-style-type: none;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    &:before{
        content: '';
        position: absolute;
        top:0;
        transform: ${({ position }) => position ? `translateX(${position})` : 'translateX(-100%)'};
        width: 20%;
        height: 100%;
        background-color: #3a3e52;
        -webkit-transition: -webkit-transform 300ms;
        transition: transform 0.3s;
        will-change: transform;
    }
    @media screen and (orientation: portrait) and (min-width: 769px){
        width: 6vw;
        height:auto;
        flex-direction: column;
    }

`
export const StyledLi = styled.li`
    height: 100%;
    width: 100%;
    @media screen and (min-width: 769px){
        width: 100%;
        height:6vw;
        &:hover {
            background-color: #3f4353;
        }
    }
`

export const StyledLink = styled(Link)`
    text-decoration:none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    text-align: center;
    outline:none;
`