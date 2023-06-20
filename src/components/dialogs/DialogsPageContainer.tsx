import React, {ComponentType} from 'react';
import {MessageType, UserType} from "../../types/types";
import {DialogsPage} from "./DialogsPage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {sendMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class DialogsClassContainerComponent extends React.Component<DialogsPageContainerType, any> {

    // updateMessage = (value: string) => {
    //     this.props.updateMessageAC(value);
    // }
    sendMessage = (value: string) => {
        this.props.sendMessageAC(value);
    }


    render() {

        return (
            <DialogsPage {...this.props}
                         // updateMessage={this.updateMessage}
                         sendMessage={this.sendMessage}/>
        );
    }
}

type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
    // newMessageText: string,
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        // newMessageText: state.dialogsReducer.newMessageText,
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    // updateMessageAC,
    sendMessageAC,
});

type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;
export type DialogsPageContainerType = ConnectedPropsType & MapStateToPropsType;
export const DialogsPageContainer = compose<ComponentType>(withAuthRedirect, ConnectComponent)(DialogsClassContainerComponent);
