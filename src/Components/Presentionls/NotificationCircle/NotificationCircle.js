import React from 'react';
import { StyledNotificationCircle } from './NotificationCircleStyles'

const NotificationCircle = (props) => {
    return (
        <StyledNotificationCircle top={props.top} right={props.right}></StyledNotificationCircle>
    );
}

export default NotificationCircle;
