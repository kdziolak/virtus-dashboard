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
            border={props.border}
            value={props.text}
        >
            <p>{props.text}</p>
            <span className={`${props.icon}`}></span>
        </StyledPillButton>
    );
}

export default PillButton;