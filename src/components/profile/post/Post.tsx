import React from 'react';
import robot from './../../../assets/images/robot.png';

export const Post = () => {
    return (
        <div>
            <div>
                <img src={robot} style={{width: '46px', height: '46px'}} alt={'robot_avatar_image'}/>
                <span>post</span>
            </div>
        </div>
    );
};
