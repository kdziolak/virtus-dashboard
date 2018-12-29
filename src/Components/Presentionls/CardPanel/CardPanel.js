import React from 'react';
import { StyledCardPanel, ProjectsBox } from './CardPanelStyles'
import CardHeader from './CardHeader/CardHeader';
import Project from './ProjectsCard/Project';

const CardPanel = () => {
    return (
        <StyledCardPanel>
            <CardHeader></CardHeader>
            <ProjectsBox>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </ProjectsBox>
        </StyledCardPanel>
    );
}

export default CardPanel;