import React, {ChangeEvent, useState} from 'react';
import classes from "./DialogsPage.module.css";
import {MessageType, UserType} from "../../types/types";
import {Dialog} from "./dialog/Dialog";
import {Message} from './message/Message';
import {ActionsType, sendMessageAC} from "../../types/actions";
import {DialogsPage} from "./DialogsPage";

type PropsType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
    dispatch: (actions: ActionsType) => void;
}

export const DialogsPageContainer = (props: PropsType) => {

    const [value, setValue] = useState<string>('');
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    }
    const sendMessage = () => {
        props.dispatch(sendMessageAC(value));
        setValue('');
    }

    return <DialogsPage arrayMessages={props.arrayMessages}
                        arrayUsers={props.arrayUsers}
                        dispatch={props.dispatch}
                        value={value}
                        onChangeHandler={onChangeHandler}
                        sendMessage={sendMessage}/>
};
