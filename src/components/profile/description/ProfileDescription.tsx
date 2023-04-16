import React from 'react';
import robot from './../../../assets/images/robot.png';

export const ProfileDescription = () => {
    return (
        <div>
            <div>
                <img src={robot} style={{width: '64px', height: '64px'}} alt={'robot_avatar_image'}/>
            </div>
            <div>Nickname:</div>
            <div>Status:</div>
        </div>
    );
};
