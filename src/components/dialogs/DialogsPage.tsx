import React, {ChangeEvent, useState} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';

type PropsType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
    sendMessage: (value: string) => void;
}

export const DialogsPage = (props: PropsType) => {

    const [value, setValue] = useState('');

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    }
    const sendMessage = () => {
        props.sendMessage(value);
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
                    props.arrayMessages.map((message: MessageType) => <Message message={message} key={message.id}/>)
                }
            </div>
            <div>
                <textarea value={value} onChange={onChangeHandler}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
