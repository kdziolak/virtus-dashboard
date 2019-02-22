import React from 'react';
import { StyledPillButton } from './PillButtonStyles'

const PillButton = (props) => {
    return (
        <StyledPillButton>
            <p>{props.text}</p>
            <span className={`${props.icon}`}></span>
        </StyledPillButton>
    );
}

export default PillButton;