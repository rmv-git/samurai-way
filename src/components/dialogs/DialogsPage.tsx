import React, {ChangeEvent} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';

type PropsType = {
    newMessageText: string;
    updateMessage: (value: string) => void;
    sendMessage: () => void;
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
}
export const DialogsPage = (props: PropsType) => {

    const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(event.currentTarget.value);
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
                    props.arrayMessages.map((message: MessageType) => <Message message={message}
                                                                               key={message.id}/>)
                }
            </div>
            <div>
                <textarea value={props.newMessageText}
                          onChange={updateMessage}/>
                <button onClick={props.sendMessage}>Send</button>
            </div>
        </div>
    );
};
