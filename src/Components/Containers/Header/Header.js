import React from 'react';
import { StyledHeader, LeftSide, RightSide, NoneDisplayAvatar } from './HeaderStyles'
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
                <PillButton icon='fas fa-plus' />
                <IconButton width active='white' icon='fas fa-search' />
                <IconButton width active='white' icon='far fa-bell' >
                    <NotificationCircle right='header' />
                </IconButton>
                <IconButton width active='white' icon='fas fa-angle-down' >
                    <NoneDisplayAvatar>
                        <Avatar avatarImg={profile} />
                    </NoneDisplayAvatar>
                </IconButton>
            </RightSide>
        </StyledHeader>
    );
}

export default Header;