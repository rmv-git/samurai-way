import React, {ChangeEvent} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {Posts} from "./posts/Posts";
import {PostType, UserProfileResponseType} from "../../types/types";

type PropsType = {
    profile: UserProfileResponseType;
    arrayPosts: PostType[];
    newPostText: string;
    addPost: () => void;
    updatePost: (value: string) => void;
    status: string;
}

export const ProfilePage = (props: PropsType) => {

    const updatePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(event.currentTarget.value)
    }

    return (
        <div className={classes.content}>
            <ProfileDescription profile={props.profile} status={props.status}/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={props.newPostText}
                          onChange={updatePost}/>
                <button onClick={props.addPost}>Add</button>
            </div>
        </div>
    );
}
