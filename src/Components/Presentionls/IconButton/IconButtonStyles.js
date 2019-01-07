import styled from 'styled-components'

export const StyledIconButton = styled.div`
    position:relative;
    width: ${({ width }) => width ? width : '0'};
    display:flex;
    flex-direction: row-reverse;
    align-items:center;
    justify-content:center;
    outline:none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: ${({ height }) => height ? height : '40px'};
    &>i{
        font-size:${({ fontSize }) => fontSize ? fontSize : '2.4rem'};
        color: ${({ active }) => active ? active : '#757da4'};
        transition: 0.3s;
    }

    

`