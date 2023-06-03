import React from 'react';
import {MessageType, UserType} from "../../types/types";
import {sendMessageAC} from "../../types/actions";
import {DialogsPage} from "./DialogsPage";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
}
type MapDispatchToPropsType = {
    sendMessage: (value: string) => void;
}
export type DialogsPageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (value: string) => {
            dispatch(sendMessageAC(value))
        },
    }
}

export const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);
