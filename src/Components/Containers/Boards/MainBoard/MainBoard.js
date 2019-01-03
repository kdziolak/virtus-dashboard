import React from 'react';
import './styles.css'
import { StyledMainBoard } from './MainBoardStyles'
import CardPanel from '../../../Presentionls/CardPanel/CardPanel'
import Project from '../../../Presentionls/CardPanel/ProjectsCard/Project'
import ColumnChartContainer from '../../../Presentionls/ColumnChartContainer/ColumnChartContainer'
import BarComponent from '../../../Presentionls/BarComponent/BarComponent'
import Calendar from 'react-calendar'

const MainBoard = () => {
    return (
        <StyledMainBoard>
            <ColumnChartContainer>
                <BarComponent></BarComponent>
            </ColumnChartContainer>
            <CardPanel headerTitle='Your projects' >
                <Project
                    title="Mobile App"
                    link='Symu.co'
                    price='1500'
                    dot={true}
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
            <CardPanel headerTitle='Inbox' notyfications={3}>
                <Project
                    ellipsis={true}
                    title="Mobile App"
                    text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    date={new Date().toDateString()}
                    avatarImg='https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-andrew-okeefe-feature.jpg'
                ></Project>
                <Project
                    ellipsis={true}
                    title="Mobile App"
                    text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    date={new Date().toDateString()}
                    avatarImg='https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-andrew-okeefe-feature.jpg'
                ></Project>
                <Project
                    ellipsis={true}
                    title="Mobile App"
                    text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    date={new Date().toDateString()}
                    avatarImg='https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-andrew-okeefe-feature.jpg'
                ></Project>
            </CardPanel>

        </StyledMainBoard>
    );
}

export default MainBoard;