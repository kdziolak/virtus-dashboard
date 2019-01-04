import styled from 'styled-components'

export const StyledPillSelect = styled.select`
        position: ${({ position }) => position ? position : 'fixed'};
        position:relative;
        bottom: ${({ bottom }) => bottom ? bottom : '12vh'};
        right: ${({ right }) => right ? right : '5vh'};
        outline: none;
        border: none;
        background-color: ${({ bgc }) => bgc ? bgc : '#2196f3'};
        width: ${({ width }) => width ? width : "10vh"}; 
        height: ${({ height }) => height ? height : "10vh"};
        border: ${({ border }) => border ? border : "2px solid #2196f3"};
        border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '50%'};
        display: flex;
        justify-content:center;
        align-items:center;
        z-index: 1;
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
        background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
        background-position-x: 8rem;
        background-size: 10%;
        &:before{
            content: "\25AE";  /* this is your text. You can also use UTF-8 character codes as I do here */
            font-family: "Font Awesome 5 Free";
            left:-5px;
            position:absolute;
            top:0;
        }
        &>p {
            display:${({ display }) => display ? display : 'none'};
        }
        &>span {
            color: #2a2c3b;
            font-size: 2rem;
            transition: .3s linear .3s;
        }
    @media screen and (min-width: 520px){
        position: relative;
        outline: none;
        border: none;
        background-color: transparent;
        width: ${({ width }) => width ? width : "133px"}; 
        height: ${({ height }) => height ? height : "5.6vh"};
        border: ${({ border }) => border ? border : "2px solid #2196f3"};
        border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "25px"};
        display: flex;
        justify-content:center;
        align-items:center;
        z-index: 0;
        cursor: pointer;
        overflow: hidden;
        
        &>p {
            font-weight:700;
            font-size:1.7rem;
            margin-right: ${({ PMarginRight }) => PMarginRight ? PMarginRight : "40px"};
            letter-spacing: .5px;
        }
        &>.fa-plus {
            color: ${({ iconColor }) => iconColor ? iconColor : "#2a2c3b"};
            transition: .3s linear .3s;
        }
        &:after{
            content:'';
            position: absolute;
            z-index: -1;
            top: -200px;
            width: 200px;
            height: 100px;
            background-color: #2196f3;
            transition: .7s linear;
        }
        &:hover:after  {
            top: 0;
        }
        &:hover>.fa-plus  {
            color: white;
        }
    }
   
`