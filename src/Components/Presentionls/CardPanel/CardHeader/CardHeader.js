import React from 'react';
import { StyledCardHeader } from './CardHeaderStyles';
import Text from './Text/Text'

const CardHeader = ({ headerTitle, notyfications }) => {
    return (
        <StyledCardHeader>
            <Text text={headerTitle} notyfications={notyfications} />
        </StyledCardHeader>
    );
}

export default CardHeader;