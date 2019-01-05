import React from 'react';
import { StyledPillSelect } from './PillSelectStyles'

const PillSelect = (props) => {
    return (
        <StyledPillSelect
            position={props.position}
            bottom={props.bottom}
            right={props.right}
            bgc={props.bgc}
            width={props.width}
            height={props.height}
            display={props.display}
            borderRadius={props.borderRadius}
            border={props.border}
            icon={props.icon}
        >
            <option selected>{props.text}</option>
            <option >abc</option>
            <option >xyz</option>
        </StyledPillSelect>
    );
}

export default PillSelect;