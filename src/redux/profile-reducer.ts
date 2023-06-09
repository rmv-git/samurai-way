import {PostType, UserProfileResponseType} from "../types/types";
import {Dispatch} from "redux";
import { API } from "../api/API";

type InitialStateType = {
    newPostText: string;
    arrayPosts: Array<PostType>;
    profile: UserProfileResponseType;
}
const initialState: InitialStateType = {
    newPostText: '',
    arrayPosts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
    profile: {} as UserProfileResponseType,
}
export const profileReducer = (state = initialState, action: ProfileReducerActions): InitialStateType => {
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
        case 'GET_USER_PROFILE':
            return {
                ...state, profile: action.profile
            }
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
type GetUserProfileActionType = {
    type: 'GET_USER_PROFILE';
    profile: UserProfileResponseType;
}

export type ProfileReducerActions =
    AddPostActionType
    | NewPostTextActionType
    | GetUserProfileActionType;
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

export const getUserProfileAC = (profile: UserProfileResponseType): GetUserProfileActionType => {
    return {
        type: 'GET_USER_PROFILE',
        profile
    }
}

export const getUserProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    API.getUserProfile(userId).then(
        res => dispatch(getUserProfileAC(res.data))
    )
}