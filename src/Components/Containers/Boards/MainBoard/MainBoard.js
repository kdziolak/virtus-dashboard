import React from 'react';
import './styles.css'
import { StyledMainBoard } from './MainBoardStyles'
import CardPanel from '../../../Presentionls/CardPanel/CardPanel'
import Project from '../../../Presentionls/CardPanel/ProjectsCard/Project';
import Calendar from 'react-calendar'
import { StyledCalendarContainer } from './MainBoardStyles'

const MainBoard = () => {
    return (
        <StyledMainBoard>
            <CardPanel>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </CardPanel>
            <CardPanel>
                <Calendar className='calendar'/>
            </CardPanel>
        </StyledMainBoard>
    );
}

export default MainBoard;