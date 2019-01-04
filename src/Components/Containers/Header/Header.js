import React from 'react';
import { StyledHeader, LeftSide, RightSide, NoneDisplayAvatar } from './HeaderStyles'
import Logo from '../../Presentionls/Logo/Logo'
import PillButton from '../../Presentionls/PillButton/PillButton'
import IconButton from '../../Presentionls/IconButton/IconButton'
import NotificationCircle from '../../Presentionls/NotificationCircle/NotificationCircle'
import Avatar from '../../Presentionls/Avatar/Avatar'

const Header = () => {
    return (
        <StyledHeader>
            <LeftSide>
                <Logo />
            </LeftSide>
            <RightSide>
                <PillButton icon='fas fa-plus' />
                <IconButton width active='white' icon='fas fa-search' />
                <IconButton width active='white' icon='far fa-bell' >
                    <NotificationCircle />
                </IconButton>
                <IconButton width active='white' icon='fas fa-angle-down' >
                    <NoneDisplayAvatar>
                        <Avatar />
                    </NoneDisplayAvatar>
                </IconButton>
            </RightSide>
        </StyledHeader>
    );
}

export default Header;