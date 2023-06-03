import React, {ChangeEvent, useState} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {Posts} from "./posts/Posts";
import {ProfilePageContainerType} from "./ProfilePageContainer";

export const ProfilePage = (props: ProfilePageContainerType) => {

    const [value, setValue] = useState<string>('');


    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={value}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.currentTarget.value)}/>
                <button onClick={() => props.addPost(value)}>Add</button>
            </div>
        </div>
    );
}
