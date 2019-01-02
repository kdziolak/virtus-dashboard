import React from 'react';
import './styles.css'
import { StyledMainBoard } from './MainBoardStyles'
import CardPanel from '../../../Presentionls/CardPanel/CardPanel'
import Project from '../../../Presentionls/CardPanel/ProjectsCard/Project';
import Calendar from 'react-calendar'

const MainBoard = () => {
    return (
        <StyledMainBoard>
            <CardPanel headerTitle='Your projects' notyfications={3}>
                <Project
                    title="Mobile App"
                    link='Symu.co'
                    price='1500'
                    avatarImg='https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-andrew-okeefe-feature.jpg'
                ></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </CardPanel>
            <CardPanel>
                <Calendar
                    className='calendar react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth'
                    minDetail='month'
                    showNeighboringMonth={true}
                    navigationLabel={({ date, view, label }) => `${label}`}
                />
            </CardPanel>
        </StyledMainBoard>
    );
}

export default MainBoard;