import {DialogsPageType, MessageType} from "../types/types";

const initialState: DialogsPageType = {
    newMessageText: '',
    arrayUsers: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ],
    arrayMessages: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'Hi, hi!'},
        {id: 3, text: 'Yo!'},
        {id: 4, text: 'Yo, yo!'},
        {id: 5, text: 'Yo, yo, yo!'},
    ],
}
export const dialogsReducer = (state = initialState, action: DialogsReducerActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: state.newMessageText,
            };
            return {...state, arrayMessages: [...state.arrayMessages, newMessage], newMessageText: ''}
        case 'UPDATE_MESSAGE':
            return {...state, newMessageText: action.newMessageText}
        default:
            return state;
    }
}

type SendMessageActionType = {
    type: 'SEND_MESSAGE';
}
type UpdateMessageActionType = {
    type: 'UPDATE_MESSAGE',
    newMessageText: string,
}

export type DialogsReducerActionsType = SendMessageActionType | UpdateMessageActionType;

export const sendMessageAC = (): SendMessageActionType => {
    return {
        type: 'SEND_MESSAGE',
    }
}

export const updateMessageAC = (value: string): UpdateMessageActionType => {
    return {
        type: 'UPDATE_MESSAGE',
        newMessageText: value,
    }
}