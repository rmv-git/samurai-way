import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./post/Post";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";

type PropsType = {
    arrayPosts: Array<PostType>;
}

export const ProfilePage = (props: PropsType) => {

    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <div>
                <Post posts={props.arrayPosts}/>
            </div>
        </div>
    );
}
