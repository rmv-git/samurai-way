import React, {ChangeEvent} from 'react';
import {MessageType, UserType} from "../../types/types";
import {DialogsPage} from "./DialogsPage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {sendMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import classes from "./DialogsPage.module.css";
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {Redirect} from "react-router-dom";

export class DialogsClassContainerComponent extends React.Component<any, any>{
    componentDidMount() {
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div className={classes.container}>
                <div className={classes.dialogs}>
                    {
                        this.props.arrayUsers.map((user: UserType) => <Dialog user={user} key={user.id}/>)
                    }
                </div>
                <div className={classes.messages}>
                    {
                        this.props.arrayMessages.map((message: MessageType) => <Message message={message} key={message.id}/>)
                    }
                </div>
                <div>
                <textarea value={this.props.newMessageText}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => this.props.updateMessage(event.currentTarget.value)}/>
                    <button onClick={() => this.props.sendMessage()}>Send</button>
                </div>
            </div>
        );
    }
}
type MapStateToPropsType = {
    arrayUsers: UserType[];
    arrayMessages: MessageType[];
    newMessageText: string,
    isAuth: boolean,
}
// type MapDispatchToPropsType = {
//     updateMessage: (value: string) => void;
//     sendMessage: () => void;
// }
export type DialogsPageContainerType = ConnectedPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
        arrayUsers: state.dialogsReducer.arrayUsers,
        arrayMessages: state.dialogsReducer.arrayMessages,
        isAuth: state.authReducer.isAuth,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateMessage: (value: string) => {
//             dispatch(updateMessageAC(value))
//         },
//         sendMessage: () => {
//             dispatch(sendMessageAC())
//         },
//     }
// }

const ConnectComponent = connect(mapStateToProps, {
    updateMessageAC,
    sendMessageAC,
})
type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;
export const DialogsPageContainer = ConnectComponent(DialogsClassContainerComponent);
