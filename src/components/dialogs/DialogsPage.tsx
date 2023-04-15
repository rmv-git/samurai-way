import React from 'react';
import classes from "./DialogsPage.module.css";

export const DialogsPage = () => {
    return (
        <div className={classes.container}>
            Dialogs
            <div className={classes.dialogs}></div>
            <div className={classes.messages}></div>
        </div>
    );
};
