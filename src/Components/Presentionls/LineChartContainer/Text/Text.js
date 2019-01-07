import React from 'react';
import { StyledText, Amount, Title } from './TextStyles'

const Text = ({ amount, title }) => {
    return (
        <StyledText>
            <Amount>{amount}</Amount>
            <Title>{title}</Title>
        </StyledText>
    );
}

export default Text;