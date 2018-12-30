import React from 'react';
import { StyledCardPanel, ProjectsBox } from './CardPanelStyles'
import CardHeader from './CardHeader/CardHeader';

const CardPanel = (props) => {
    return (
        <StyledCardPanel>
            <CardHeader></CardHeader>
            <ProjectsBox>
                {props.children}
            </ProjectsBox>
        </StyledCardPanel>
    );
}

export default CardPanel;