import {StateType} from "../types/types";
import {renderThree} from "../index";

export let state: StateType = {
    profilePage: {
        arrayPosts: [
            {id: 1, text: 'First post', likesCount: 2},
            {id: 2, text: 'Hello', likesCount: 3},
            {id: 3, text: 'Text', likesCount: 4},
        ],
    },
    dialogsPage: {
        arrayUsers: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Diana'},
            {id: 4, name: 'Valera'},
        ],
        arrayMessages: [
            {id: 1, text: 'asdadsfsdf'},
            {id: 2, text: 'sdfsdffdg'},
            {id: 3, text: 'sdfsdf'},
            {id: 4, text: 'sdfsdfdf'},
        ],
    },
    sidebar: {
        arrayUsers: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Dimych'},
            {id: 4, name: 'Valera'},
        ],
    }
}

export const addPost = (value: string) => {
    state.profilePage.arrayPosts.push({id: 4, text: value, likesCount: 0});
    renderThree(state);
}
export const sendMessage = (value: string) => {
    state.dialogsPage.arrayMessages.push({id: 5, text: value});
    renderThree(state);
}