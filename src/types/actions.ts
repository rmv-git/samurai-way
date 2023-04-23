type AddPostActionType = {
    type: 'ADD_POST';
    newPostText: string;
}
type SendMessageActionType = {
    type: 'SEND_MESSAGE';
    newMessageText: string;
}

export type ActionsType = AddPostActionType | SendMessageActionType;
export const addPostAC = (value: string): AddPostActionType => {
    return {
        type: 'ADD_POST',
        newPostText: value,
    }
}
export const sendMessageAC = (value: string): SendMessageActionType => {
    return {
        type: 'SEND_MESSAGE',
        newMessageText: value,
    }
}
