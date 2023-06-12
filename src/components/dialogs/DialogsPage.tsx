import React, {ChangeEvent} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';
import {DialogsPageContainerType} from "./DialogsPageContainer";
import {Redirect} from "react-router-dom";

export const DialogsPage = (props: DialogsPageContainerType) => {

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {
                    props.arrayUsers.map((user: UserType) => <Dialog user={user} key={user.id}/>)
                }
            </div>
            <div className={classes.messages}>
                {
                    props.arrayMessages.map((message: MessageType) => <Message message={message} key={message.id}/>)
                }
            </div>
            <div>
                <textarea value={props.newMessageText}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => props.updateMessage(event.currentTarget.value)}/>
                <button onClick={() => props.sendMessage()}>Send</button>
            </div>
        </div>
    );
};
