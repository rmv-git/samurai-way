import React, {ComponentType} from 'react';
import {MessageType, UserType} from "../../types/types";
import {DialogsPage} from "./DialogsPage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class DialogsClassContainerComponent extends React.Component<DialogsPageContainerType, any> {

    sendMessage = (value: string) => {
        this.props.sendMessageAC(value);
    }


    render() {

        return (
            <DialogsPage {...this.props}
                         sendMessage={this.sendMessage}/>
        );
    }
}

type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    sendMessageAC,
});

type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;
export type DialogsPageContainerType = ConnectedPropsType & MapStateToPropsType;
export const DialogsPageContainer = compose<ComponentType>(withAuthRedirect, ConnectComponent)(DialogsClassContainerComponent);
