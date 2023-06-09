import React, {ChangeEvent} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {Posts} from "./posts/Posts";
import {ProfilePageContainer, ProfilePageContainerType} from "./ProfilePageContainer";

export const ProfilePage = (props: ProfilePageContainerType) => {
    return (
        <div className={classes.content}>
            <ProfileDescription profile={props.profile}/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={props.newPostText}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => props.updatePost(event.currentTarget.value)}/>
                <button onClick={() => props.addPost()}>Add</button>
            </div>
        </div>
    );
}
