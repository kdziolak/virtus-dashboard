import styled from 'styled-components'

export const StyledProject = styled.section`
    width: 100%;
    min-height: ${({ text }) => text ? '25%' : '25%'};
    display: flex;
    align-items: center;
    padding: 0% 5%;
    border-bottom: 1px solid #3a3e52;
`
export const RightSide = styled.div`
    width: 5%;
    display: ${({ ellipsis }) => ellipsis ? 'none' : 'block'};
`

export const LeftSide = styled.div`
    width: ${({ ellipsis }) => ellipsis ? '100%' : '95%'};
    min-height: 10vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`