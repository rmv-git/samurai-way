type AddPostActionType = {
    type: 'ADD_POST';
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
