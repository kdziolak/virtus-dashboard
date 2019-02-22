import styled from 'styled-components'

export const StyledText = styled.p`
    width: 30%;
    height: 60%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-around;
    padding-left: 5vw;
    @media screen and (orientation:portrait) and (min-width: 720px){
        padding-left:1rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        padding-left:2rem;
    }
`

export const Amount = styled.span`
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
    @media screen and (orientation:portrait) and (min-width: 720px){
        font-size: 1.7rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        font-size: 1.5rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
        font-size: 2rem;
    }

`

export const Title = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(156, 161, 178, 255);
    @media screen and (orientation:portrait) and (min-width: 720px){
        font-size: 1.2rem;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        font-size: 1.1rem;

    }
    @media screen and (orientation:landscape) and (min-width: 1600px){
        font-size: 1.3rem;
    }

`