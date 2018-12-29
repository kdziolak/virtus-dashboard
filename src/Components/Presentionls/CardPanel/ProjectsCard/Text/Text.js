import React from 'react';
import { StyledText, StyledH3, StyledP, StyledWebPage, StyledPrice, Dot } from './TextStyle'

const Text = () => {
    return (
        <StyledText>
            <StyledH3>Mobile App</StyledH3>
            <StyledP><StyledWebPage>Symu.co </StyledWebPage><i class="fas fa-circle"></i><StyledPrice>$1500</StyledPrice></StyledP>
        </StyledText>
    );
}

export default Text;
