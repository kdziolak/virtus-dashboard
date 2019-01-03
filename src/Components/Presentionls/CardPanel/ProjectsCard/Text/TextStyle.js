import styled from 'styled-components'

export const StyledText = styled.div`
    display:flex;
    height: ${({ text }) => text ? '60%' : '45%'};
    width: ${({ text }) => text ? '80%' : 'auto'};
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 0;
`

export const StyledH3 = styled.h3`

`

export const StyledP = styled.p`
color: #9da2b3;
width: 100%;
margin-top: ${({ text }) => text ? '1rem' : '0'};
line-height: ${({ text }) => text ? '2rem' : '2rem'};
display: flex;
align-items: center;
justify-content: space - between;
    &> i{
    font-size: 0.3rem;
    color: inherit;
    margin-left: 3px;
    margin-right: 3px;
}
`

export const StyledWebPage = styled.span`
color: inherit;
`

export const StyledPrice = styled.span`
color: inherit;
`

export const StyledDate = styled.span`
font-size: 1rem;
font-weight: 700;
color: #2196f3;
`
export const FlexContainer = styled.span`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
