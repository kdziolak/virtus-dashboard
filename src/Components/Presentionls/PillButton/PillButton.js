import React from 'react';
import { StyledPillButton } from './PillButtonStyles'

const PillButton = (props) => {
    return (
        <StyledPillButton
            position={props.position}
            bottom={props.bottom}
            right={props.right}
            bgc={props.bgc}
            width={props.width}
            height={props.height}
            display={props.display}
            borderRadius={props.borderRadius}
        >
            <p>Add</p>
            <span className="fas fa-plus"></span>
        </StyledPillButton>
    );
}

export default PillButton;