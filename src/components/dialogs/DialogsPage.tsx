import React from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";

export const DialogsPage = () => {

    const arrayUsers: Array<UserType> = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Valera'},
    ];
    const arrayMessages: Array<MessageType> = [
        {id: 1, text: 'asdadsfsdf'},
        {id: 2, text: 'sdfsdffdg'},
        {id: 3, text: 'sdfsdf'},
        {id: 4, text: 'sdfsdfdf'},
    ];

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {
                    arrayUsers.map((user: UserType) => <Dialog user={user} key={user.id}/>)
                }
            </div>
            <div className={classes.messages}>
                {
                    arrayMessages.map((message: MessageType) =>
                        <div key={message.id}>{message.text}</div>)
                }
            </div>
        </div>
    );
};
