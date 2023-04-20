import React from 'react';
import {PostType} from '../../../../types/types';
import robot from '../../../../assets/images/robot.png';

type PropsType = {
    post: PostType;
}
export const Post = (props: PropsType) => {
    return (
        <div>
            <div>
                <img src={robot} style={{width: '46px', height: '46px'}} alt={'robot_avatar_image'}/>
                <span>{props.post.text}</span>
            </div>
            <div>likes: {props.post.likesCount}</div>
        </div>
    );
};
