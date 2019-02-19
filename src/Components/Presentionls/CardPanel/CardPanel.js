import React from 'react';
import { StyledCardPanel, ProjectsBox } from './CardPanelStyles'
import CardHeader from './CardHeader/CardHeader';

const CardPanel = (props) => {
    return (
        <StyledCardPanel headerTitle={props.headerTitle}>
            <CardHeader headerTitle={props.headerTitle} notyfications={props.notyfications}></CardHeader>
            <ProjectsBox headerTitle={props.headerTitle}>
                {props.children}
            </ProjectsBox>
        </StyledCardPanel>
    );
}

export default CardPanel;