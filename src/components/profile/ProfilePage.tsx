import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./post/Post";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";

export const ProfilePage = () => {

    const arrayPosts: Array<PostType> = [
        {id: 1, text: 'First post', likesCount: 2},
        {id: 2, text: 'Hello', likesCount: 3},
        {id: 3, text: 'Text', likesCount: 4},
    ];

    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <div>
                <Post posts={arrayPosts}/>
            </div>
        </div>
    );
}
