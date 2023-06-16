import React from 'react';
import {MessageType, UserType} from "../../types/types";
import {DialogsPage} from "./DialogsPage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {sendMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

export class DialogsClassContainerComponent extends React.Component<DialogsPageContainerType, any> {

    updateMessage = (value: string) => {
        this.props.updateMessageAC(value);
    }
    sendMessage = () => {
        this.props.sendMessageAC();
    }


    render() {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <DialogsPage {...this.props}
                         updateMessage={this.updateMessage}
                         sendMessage={this.sendMessage}/>
        );
    }
}

type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
    newMessageText: string,
    isAuth: boolean,
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
        isAuth: state.authReducer.isAuth,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    updateMessageAC,
    sendMessageAC,
});

type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;
export type DialogsPageContainerType = ConnectedPropsType & MapStateToPropsType;
export const DialogsPageContainer = ConnectComponent(DialogsClassContainerComponent);
