import React from 'react';
import { StyledColumnChartContainer, StyledChart, Title, Scroll, FlexContainer } from './ColumnChartContainerStyles'
import PillButton from '../PillButton/PillButton'

const ColumnChartContainer = (props) => {
    return (
        <StyledColumnChartContainer>
            <FlexContainer>
                <Title>Sales raport</Title>
                <p>
                    <PillButton
                        position='relative'
                        bottom='0'
                        right='0'
                        bgc='transparent'
                        display='block'
                        width='10rem'
                        height='2rem'
                        borderRadius='2.5rem'
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