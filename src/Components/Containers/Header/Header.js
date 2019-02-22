import React from 'react';
import { StyledHeader, LeftSide, RightSide, NoneDisplayAvatar, IconsContainer } from './HeaderStyles'
import Logo from '../../Presentionls/Logo/Logo'
import PillButton from '../../Presentionls/PillButton/PillButton'
import IconButton from '../../Presentionls/IconButton/IconButton'
import NotificationCircle from '../../Presentionls/NotificationCircle/NotificationCircle'
import Avatar from '../../Presentionls/Avatar/Avatar'
import profile from '../../Presentionls/Avatar/img/profile.jpg'


const Header = () => {
    const { angle } = window.screen.orientation
    return (
        <StyledHeader>
            <LeftSide>
                <Logo />
            </LeftSide>
            <RightSide>
                <PillButton icon='fas fa-plus' text='Add' />
                <IconsContainer>
                    <IconButton active='white' icon='fas fa-search' />
                    <IconButton active='white' icon='far fa-bell' >
                        <NotificationCircle right='header' />
                    </IconButton>
                    <IconButton active='white' icon='fas fa-angle-down' >
                        <NoneDisplayAvatar>
                            <Avatar avatarImg={profile} />
                        </NoneDisplayAvatar>
                    </IconButton>
                </IconsContainer>
            </RightSide>
        </StyledHeader>
    );
}

export default Header;