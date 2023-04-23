type AddPostActionType = {
    type: 'ADD_POST';
    newPostText: string;
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT';
    value: string;
}
type SendMessageActionType = {
    type: 'SEND_MESSAGE';
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT';
    value: string;
}

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextActionType;

export const addPostAC = (value: string): AddPostActionType => {
    return {
        type: 'ADD_POST',
        newPostText: value,
    }
}
// export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => {
//     return {
//         type: 'UPDATE_NEW_POST_TEXT',
//         value: newPostText,
//     }
// }
export const sendMessageAC = (): SendMessageActionType => {
    return {
        type: 'SEND_MESSAGE',
    }
}
export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        value: newMessageText,
    }
}
