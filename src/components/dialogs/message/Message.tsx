import React from 'react';
import {MessageType} from "../../../types/types";

type PropsType = {
    message: MessageType;
}
export const Message = (props: PropsType) => {
    return (
        <div>{props.message.text}</div>
    );
};
