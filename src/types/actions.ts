type AddPostActionType = {
    type: 'ADD_POST';
    // newPostText: string;
}
type SendMessageActionType = {
    type: 'SEND_MESSAGE';
    newMessageText: string;
}
type NewPostTextActionType = {
    type: 'NEW_POST_TEXT';
    newPostText: string;
}

export type ActionsType = AddPostActionType | SendMessageActionType | NewPostTextActionType;

export const sendMessageAC = (value: string): SendMessageActionType => {
    return {
        type: 'SEND_MESSAGE',
        newMessageText: value,
    }
}
