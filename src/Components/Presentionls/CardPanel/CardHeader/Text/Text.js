import React from 'react';
import { StyledText } from './TextStyles'

const Text = ({ text, notyfications }) => <StyledText>{text} {notyfications ? `(${notyfications})` : ''}</StyledText>


export default Text;    