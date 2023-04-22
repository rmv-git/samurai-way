import {ActionsType} from "../types/actions";
import {DialogsPageType, MessageType} from "../types/types";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
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
