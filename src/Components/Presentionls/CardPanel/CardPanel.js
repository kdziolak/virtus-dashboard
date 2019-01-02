import React from 'react';
import { StyledCardPanel, ProjectsBox } from './CardPanelStyles'
import CardHeader from './CardHeader/CardHeader';

const CardPanel = (props) => {
    return (
        <StyledCardPanel>
            <CardHeader headerTitle={props.headerTitle} notyfications={props.notyfications}></CardHeader>
            <ProjectsBox>
                {props.children}
            </ProjectsBox>
        </StyledCardPanel>
    );
}

export default CardPanel;