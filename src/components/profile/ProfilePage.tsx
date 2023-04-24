import React, {ChangeEvent} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";
import {Posts} from "./posts/Posts";

type PropsType = {
    arrayPosts: Array<PostType>;
    value: string
    addPost: () => void;
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ProfilePage = (props: PropsType) => {
    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={props.value} onChange={props.onChangeHandler}/>
                <button onClick={props.addPost}>Add</button>
            </div>
        </div>
    );
}
