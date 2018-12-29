import React from 'react';
import { StyledIconButton } from './IconButtonStyles'

const IconButton = (props) => {

    return (
        <StyledIconButton
            width={props.width}
            active={props.active}
            fontSize={props.fontSize}
        >
            <i className={props.icon}></i>
            {props.children}
        </StyledIconButton>
    );
}

export default IconButton;