import React from 'react';
import { StyledPillButton } from './PillButtonStyles'

const PillButton = () => {
    return (
        <StyledPillButton >
            <p>Add</p>
            <span className="fas fa-plus"></span>
        </StyledPillButton>
    );
}

export default PillButton;