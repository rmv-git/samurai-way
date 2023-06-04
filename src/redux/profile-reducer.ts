import {PostType, ProfilePageType} from "../types/types";

const initialState: ProfilePageType = {
    newPostText: '',
    arrayPosts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
}
export const profileReducer = (state = initialState, action: ProfileReducerActions): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                text: state.newPostText,
                likesCount: 0,
            };
            return {...state, arrayPosts: [newPost, ...state.arrayPosts], newPostText: ''}
        case 'NEW_POST_TEXT':
            return {...state, newPostText: action.newPostText}
        default:
            return state;
    }
}

type AddPostActionType = {
    type: 'ADD_POST';
}

type NewPostTextActionType = {
    type: 'NEW_POST_TEXT';
    newPostText: string;
}

export type ProfileReducerActions = AddPostActionType | NewPostTextActionType;
export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD_POST',
    }
}
export const newPostTextAC = (value: string): NewPostTextActionType => {
    return {
        type: 'NEW_POST_TEXT',
        newPostText: value,
    }
}
