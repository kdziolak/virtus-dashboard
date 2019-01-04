import React from 'react';
import { StyledColumnChartContainer, StyledChart, Title, Scroll, FlexContainer } from './ColumnChartContainerStyles'
import PillSelect from '../PillSelect/PillSelect';

const ColumnChartContainer = (props) => {
    return (
        <StyledColumnChartContainer>
            <FlexContainer>
                <Title>Sales raport</Title>
                <p>
                    <PillSelect
                        position='relative'
                        bottom='0'
                        right='0'
                        bgc='transparent'
                        display='block'
                        width='10rem'
                        height='2.5rem'
                        borderRadius='2.5rem'
                        border='1px solid #2f3242'
                        icon='fas fa-angle-down'
                        text='year'
                    />
                </p>
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