import React, { Component } from 'react';
import { StyledMenu, StyledUl, StyledLi, StyledLink } from './MenuStyles'
import IconButton from '../../Presentionls/IconButton/IconButton'
import NotificationCircle from '../../Presentionls/NotificationCircle/NotificationCircle';

class Menu extends Component {

    state = {
        isActive: {
            home: false,
            bars: true,
            line: false,
            envelope: false,
            users: false
        },
        nowActive: 'bars',
        position: ''
    }

    handleClick = value => {
        let prevActive = this.state.nowActive;
        let position = '';
        if (value === 'home') position = -200;
        else if (value === 'bars') position = -100
        else if (value === 'line') position = 0
        else if (value === 'envelope') position = 100
        else if (value === 'users') position = 200

        this.setState(prevState => {
            return {
                nowActive: value,
                isActive: {
                    ...prevState.isActive,
                    [value]: true,
                    [prevActive]: false
                },
                position
            }
        })
    }
    render() {
        const { home, bars, line, envelope, users } = this.state.isActive;
        const { position } = this.state;

        return (
            <StyledMenu >
                <StyledUl position={position}>
                    <StyledLi>
                        <StyledLink to='/' onClick={() => this.handleClick('home')}>
                            <IconButton width="100%" active={home} icon="fas fa-home" />
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/' onClick={() => this.handleClick('bars')}>
                            <IconButton width="100%" active={bars} icon="fas fa-bars" />
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/' data-name='home' onClick={() => this.handleClick('line')} >
                            <IconButton width="100%" active={line} icon="fas fa-chart-line" />
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/' data-name='home' onClick={() => this.handleClick('envelope')} >
                            <IconButton width="100%" active={envelope} icon="fas fa-envelope" >
                                <NotificationCircle top right />
                            </IconButton>
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to='/' data-name='home' onClick={() => this.handleClick('users')} >
                            <IconButton width="100%" active={users} icon="fas fa-users" >
                            </IconButton>
                        </StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledMenu >
        );
    }

}

export default Menu;