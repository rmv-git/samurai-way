import React, {ChangeEvent, useState} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';

type PropsType = {
    // newMessageText: string;
    // updateMessage: (value: string) => void;
    sendMessage: (value: string) => void;
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
}
export const DialogsPage = (props: PropsType) => {

    const [value, setValue] = useState<string>('');

    const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    }
    const sendMessage = () => {
        if (value !== null) {
            props.sendMessage(value);
        }
        setValue('');
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
                <textarea value={value}
                          onChange={updateMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
