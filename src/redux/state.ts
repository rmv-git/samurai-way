import {StateType} from "../types/types";

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
}