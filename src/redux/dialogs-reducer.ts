import {MessageType, UserType} from "../types/types";

type InitialStateType = {
    arrayMessages: MessageType[];
    arrayUsers: UserType[];
}

const initialState: InitialStateType = {
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
export const dialogsReducer = (state = initialState, action: DialogsReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: action.value,
            };
            return {...state, arrayMessages: [...state.arrayMessages, newMessage]}
        default:
            return state;
    }
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>;

export type DialogsReducerActionsType = SendMessageActionType;

export const sendMessageAC = (value: string) => {
    return {
        type: 'SEND_MESSAGE',
        value,
    } as const
}
