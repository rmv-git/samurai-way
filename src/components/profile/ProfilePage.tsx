import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./post/Post";
import {ProfileDescription} from "./description/ProfileDescription";

export const ProfilePage = () => {
    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}