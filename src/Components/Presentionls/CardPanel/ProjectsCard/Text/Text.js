import React from 'react';
import { StyledText, StyledH3, StyledP, StyledWebPage, StyledPrice} from './TextStyle'

const Text = ({ title, link, price }) => {
    return (
        <StyledText>
            <StyledH3>{title}</StyledH3>
            <StyledP><StyledWebPage>{link} </StyledWebPage><i class="fas fa-circle"></i><StyledPrice>${price}</StyledPrice></StyledP>
        </StyledText>
    );
}

export default Text;
