import React from 'react';
import { StyledMainBoard } from './MainBoardStyles'
import CardPanel from '../../../Presentionls/CardPanel/CardPanel'

const MainBoard = () => {
    return (
        <StyledMainBoard>
            <CardPanel></CardPanel>
            <CardPanel></CardPanel>
        </StyledMainBoard>
    );
}

export default MainBoard;