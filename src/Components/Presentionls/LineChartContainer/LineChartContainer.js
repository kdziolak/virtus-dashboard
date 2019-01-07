import React from 'react';
import { StyledLineChartContainer, StyledChart, Scroll, FlexContainer, Progressbar, ProgressbarContainer } from './LineChartContainerStyles'
import Text from './Text/Text'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const LineChartContainer = (props) => {
    return (
        <StyledLineChartContainer>
            <FlexContainer>
                <ProgressbarContainer>
                    <Progressbar>
                        <CircularProgressbar
                            initialAnimation={true}
                            percentage={30}
                            text={`30%`}
                            styles={{
                                path: { stroke: `#2196f3` },
                                text: { fill: '#2196f3', fontSize: '2.2rem', fontWeight: '700' },
                                trail: { stroke: '#474b5b' }
                            }}
                        />
                    </Progressbar>
                    <Text
                        amount={1400}
                        title='views'
                    />
                </ProgressbarContainer>
                <ProgressbarContainer>
                    <Progressbar>
                        <CircularProgressbar
                            initialAnimation={true}
                            percentage={45}
                            text={`45%`}
                            styles={{
                                path: { stroke: `#2196f3` },
                                text: { fill: '#2196f3', fontSize: '2.2rem', fontWeight: '700' },
                                trail: { stroke: '#474b5b' }
                            }}
                        />
                    </Progressbar>
                    <Text
                        amount={900}
                        title='visitors'
                    />
                </ProgressbarContainer>
                <ProgressbarContainer>
                    <Progressbar>
                        <CircularProgressbar
                            initialAnimation={true}
                            percentage={60}
                            text={`60%`}
                            styles={{
                                path: { stroke: `#2196f3` },
                                text: { fill: '#2196f3', fontSize: '2.2rem', fontWeight: '700' },
                                trail: { stroke: '#474b5b' }
                            }}
                        />
                    </Progressbar>
                    <Text
                        amount={3800}
                        title='impressions'
                    />
                </ProgressbarContainer>
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