import React from 'react';
import { StyledProject, RightSide, LeftSide } from './ProjectStyles';
import Avatar from '../../Avatar/Avatar'
import Text from './Text/Text'
import IconButton from '../../IconButton/IconButton';

const Project = (props) => {
    const { text, title, link, price, avatarImg, dot, ellipsis, date } = props;
    return (
        <StyledProject text={text}>
            <LeftSide ellipsis={ellipsis}>
                <Avatar size='35px' avatarImg={avatarImg} />
                <Text title={title} link={link} price={price} dot={dot} date={date} text={text}></Text>
            </LeftSide>
            <RightSide ellipsis={ellipsis}>
                <IconButton fontSize='1.5rem' active='#9da2b3' icon='fas fa-ellipsis-v'></IconButton>
            </RightSide>
        </StyledProject>
    );
}

export default Project;