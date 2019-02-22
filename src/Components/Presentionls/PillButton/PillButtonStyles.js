import styled from 'styled-components'

export const StyledPillButton = styled.button`
        position: fixed;
        bottom: 12vh;
        right: 5vh;
        outline: none;
        border: none;
        background-color:#2196f3;
        width: 10vh; 
        height: 10vh;
        border: 2px solid #2196f3;
        border-radius: 50%;
        display: flex;
        justify-content:center;
        align-items:center;
        z-index: 1;
        &>p {
            display:none;
        }
        &>span {
            color: #2a2c3b;
            font-size: 2rem;
            transition: .3s linear .3s;
        }
    @media (orientation:landscape) and (min-width: 520px), screen and (orientation:portrait) and (min-width: 1024px)
    {
        position: static;
        outline: none;
        border: none;
        background-color: transparent;
        width:11rem;
        height: 9vh;
        border: 2px solid #2196f3;
        border-radius:25px;
        display: flex;
        justify-content:center;
        align-items:center;
        z-index: 0;
        cursor: pointer;
        overflow: hidden;
        &>p {
            display:block;
            color:white;
            font-weight:700;
            font-size:1.5rem;
            margin-right: 40px;
            letter-spacing: .5px;
        }
        &>.fa-plus {
            color: white;
            font-size: 1.3rem;
            transition: .3s linear;
        }
        &:after{
            content:'';
            position: absolute;
            z-index: -1;
            top: -200px;
            width: 200px;
            height: 100px;
            background-color: #2196f3;
            transition: .7s ease-in;
        }
        &:hover:after  {
            top: 0;
        }
        
    }
    @media screen and (orientation:portrait) and (min-width: 760px){
        width: 9vh; 
        height: 9vh;
        right: 3vh;
    }
    @media screen and (orientation:portrait) and (min-width: 1024px){
        height:4vh;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        width:14rem;
        height: 5.6vh;
    }

`