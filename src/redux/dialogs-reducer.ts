import {ActionsType} from "../types/actions";
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
export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                text: state.newMessageText,
            };
            if (state.newMessageText !== '') {
                state.arrayMessages.push(newMessage);
            }
            state.newMessageText = '';
            return state;
        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessageText = action.value;
            return state;
        default:
            return state;
    }
}
