import React from 'react';
import {PostType} from '../../../types/types';
import robot from './../../../assets/images/robot.png';

type PropsType = {
    posts: Array<PostType>;
}
export const Post = (props: PropsType) => {
    return (
        <div>
            {props.posts.map((post: PostType) => <div key={post.id}>
                <img src={robot} style={{width: '46px', height: '46px'}} alt={'robot_avatar_image'}/>
                <span>{post.text}</span>
                <div>likes: {post.likesCount}</div>
            </div>)}
        </div>
    );
};
