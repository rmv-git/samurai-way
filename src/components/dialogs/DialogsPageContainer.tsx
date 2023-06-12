import React from 'react';
import {MessageType, UserType} from "../../types/types";
import {DialogsPage} from "./DialogsPage";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {sendMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";

type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
    newMessageText: string,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    updateMessage: (value: string) => void;
    sendMessage: () => void;
}
export type DialogsPageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
        isAuth: state.authReducer.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessage: (value: string) => {
            dispatch(updateMessageAC(value))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}

export const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);
