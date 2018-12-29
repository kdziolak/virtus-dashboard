import React from 'react';
import { StyledProject, RightSide, LeftSide } from './ProjectStyles';
import Avatar from '../../Avatar/Avatar'
import Text from './Text/Text'
import IconButton from '../../IconButton/IconButton';

const Project = () => {
    return (
        <StyledProject>
            <LeftSide>
                <Avatar size='35px' />
                <Text></Text>
            </LeftSide>
            <RightSide>
                <IconButton fontSize='1.5rem' active='#9da2b3' icon='fas fa-ellipsis-v'></IconButton>
            </RightSide>
        </StyledProject>
    );
}

export default Project;