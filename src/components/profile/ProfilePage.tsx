import React, {ChangeEvent, useState} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {Posts} from "./posts/Posts";
import {PostType, UserProfileResponseType} from "../../types/types";

type PropsType = {
    profile: UserProfileResponseType;
    arrayPosts: PostType[];
    addPost: (value: string) => void;
    status: string;
    error: string[];
    updateUserStatus: (value: string) => void;
}

export const ProfilePage = (props: PropsType) => {

    const [value, setValue] = useState<string>('');
    const updatePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value)
    }

    const addPost = () => {
        if (value !== null) {
            props.addPost(value);
        }
        setValue('');
    }

    return (
        <div className={classes.content}>
            <ProfileDescription profile={props.profile}
                                status={props.status}
                                error={props.error}
                                updateUserStatus={props.updateUserStatus}
            />
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={value}
                          onChange={updatePost}/>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    );
}
