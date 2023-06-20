import {DialogsPageType, MessageType} from "../types/types";

const initialState: DialogsPageType = {
    // newMessageText: '',
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
                text: action.value,
            };
            return {...state, arrayMessages: [...state.arrayMessages, newMessage]}
        // case 'UPDATE_MESSAGE':
        //     return {...state, newMessageText: action.newMessageText}
        default:
            return state;
    }
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>;
type UpdateMessageActionType = ReturnType<typeof updateMessageAC>;

export type DialogsReducerActionsType = SendMessageActionType | UpdateMessageActionType;

export const sendMessageAC = (value: string) => {
    return {
        type: 'SEND_MESSAGE',
        value,
    } as const
}

export const updateMessageAC = (value: string) => {
    return {
        type: 'UPDATE_MESSAGE',
        newMessageText: value,
    } as const
}