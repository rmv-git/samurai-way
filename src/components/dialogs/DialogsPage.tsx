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
}

export const DialogsPage = (props: PropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE_NEW_MESSAGE_TEXT', value: event.currentTarget.value})
    }
    const sendMessage = () => {
        if (textAreaMessageText.current) {
            props.dispatch({type: 'SEND_MESSAGE'});
            textAreaMessageText.current.value = ''
        }
    }

    let textAreaMessageText = React.createRef<HTMLTextAreaElement>();


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
                <textarea ref={textAreaMessageText} onChange={onChangeHandler}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
