import React from 'react';
import { StyledColumnChartContainer, StyledChart, Title, Scroll, FlexContainer } from './ColumnChartContainerStyles'
import PillSelect from '../PillSelect/PillSelect';

const ColumnChartContainer = (props) => {
    return (
        <StyledColumnChartContainer>
            <FlexContainer>
                <Title>Sales raport</Title>
                <PillSelect
                    position='relative'
                    bottom='0'
                    right='0'
                    bgc='transparent'
                    display='block'
                    width='12rem'
                    height='3rem'
                    borderRadius='2.5rem'
                    border='1px solid #505464'
                    icon='fas fa-angle-down'
                    text='year'
                />
            </FlexContainer>
            <StyledChart>
                <Scroll>
                    {props.children}
                </Scroll>
            </StyledChart>
        </StyledColumnChartContainer>
    );
}

export default ColumnChartContainer;