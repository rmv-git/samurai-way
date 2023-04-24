import React, {ChangeEvent} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';
import {ActionsType} from "../../types/actions";

type PropsType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
    dispatch: (actions: ActionsType) => void;
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    sendMessage: () => void;
    value: string;
}

export const DialogsPage = (props: PropsType) => {

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
                <textarea value={props.value} onChange={props.onChangeHandler}/>
                <button onClick={props.sendMessage}>Send</button>
            </div>
        </div>
    );
};
