import React from 'react';
import { StyledLineChartContainer, StyledChart, Scroll, FlexContainer } from './ColumnChartContainerStyles'

const LineChartContainer = (props) => {
    return (
        <StyledLineChartContainer>
            <FlexContainer>

            </FlexContainer>
            <StyledChart>
                <Scroll>
                    {props.children}
                </Scroll>
            </StyledChart>
        </StyledLineChartContainer>
    );
}

export default LineChartContainer;