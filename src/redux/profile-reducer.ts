import {PostType, ProfilePageType} from "../types/types";
import {ActionsType} from "../types/actions";

const initialState: ProfilePageType = {
    newPostText: '',
    arrayPosts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
}
export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                text: action.newPostText,
                likesCount: 0,
            };
            return {...state, arrayPosts: [newPost, ...state.arrayPosts]}
        default:
            return state;
    }
}
