import React from 'react';
import { StyledText, StyledSpan } from './TextStyles'

const Text = ({ text, notyfications }) => <StyledText>{text} {notyfications ? '(' : ''}{notyfications ? <StyledSpan>{notyfications}</StyledSpan> : ''}{notyfications ? ')' : ''}</StyledText>


export default Text;    