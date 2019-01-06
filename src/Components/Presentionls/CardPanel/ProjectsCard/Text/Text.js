import React from 'react';
import { StyledText, StyledH3, StyledP, StyledWebPage, StyledPrice, StyledDate, FlexContainer } from './TextStyle'

const Text = ({ text, title, link, price, date }) => {
    return (
        <StyledText text={text}>
            <FlexContainer>
                <StyledH3>{title}</StyledH3>
                {date ? <StyledDate>{date}</StyledDate> : null}
            </FlexContainer>
            {text ? <StyledP text={text}>{text}</StyledP> : <StyledP><StyledWebPage>{link} </StyledWebPage><i className="fas fa-circle"></i><StyledPrice>${price}</StyledPrice></StyledP>}
        </StyledText>
    );
}

export default Text;
