import {PostType, UserProfileResponseType} from "../types/types";
import {Dispatch} from "redux";
import {API} from "../api/API";
import {isFetchingAC} from "./app-reducer";

export type InitialStateType = {
    arrayPosts: Array<PostType>;
    profile: UserProfileResponseType;
    status: string;
    error: string[];
}
const initialState: InitialStateType = {
    arrayPosts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
    profile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    status: '',
    error: [],
}
export const profileReducer = (state = initialState, action: ProfileReducerActions): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                text: action.value,
                likesCount: 0,
            };
            return {...state, arrayPosts: [newPost, ...state.arrayPosts]}
        case 'GET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'GET_USER_STATUS':
            return {...state, status: action.status}
        case 'SET_ERROR':
            return {...state, error: action.error}
        case 'REMOVE_POST':
            return {...state, arrayPosts: state.arrayPosts.filter(post => post.id !== action.id)}
        default:
            return state;
    }
}

type AddPostActionType = ReturnType<typeof addPostAC>;
type NewPostTextActionType = ReturnType<typeof newPostTextAC>;
type GetUserProfileActionType = ReturnType<typeof getUserProfileAC>;
type GetUserStatusActionType = ReturnType<typeof getUserStatusAC>;
type SetErrorActionType = ReturnType<typeof setErrorAC>;
type RemovePostActionType = ReturnType<typeof removePostAC>;

export type ProfileReducerActions =
    AddPostActionType
    | NewPostTextActionType
    | GetUserProfileActionType
    | GetUserStatusActionType
    | SetErrorActionType
    | RemovePostActionType;
export const addPostAC = (value: string) => {
    return {
        type: 'ADD_POST',
        value,
    } as const
}
export const newPostTextAC = (value: string) => {
    return {
        type: 'NEW_POST_TEXT',
        newPostText: value,
    } as const
}

export const getUserProfileAC = (profile: UserProfileResponseType) => {
    return {
        type: 'GET_USER_PROFILE',
        profile
    } as const
}

export const getUserStatusAC = (status: string) => {
    return {
        type: 'GET_USER_STATUS',
        status
    } as const
}
export const setErrorAC = (error: string[]) => {
    return {
        type: 'SET_ERROR',
        error,
    } as const
}
export const removePostAC = (id: number) => {
    return {
        type: 'REMOVE_POST',
        id,
    } as const
}

export const getUserProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true));
    API.getUserProfile(userId).then(
        res => {
            dispatch(getUserProfileAC(res.data))
            dispatch(isFetchingAC(false));
        }
    )
}

export const getUserStatusThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true));
    API.getUserStatus(userId).then(
        res => {
            dispatch(isFetchingAC(false));
            dispatch(getUserStatusAC(res.data))
        }
    )
}

export const updateUserStatusThunk = (status: string) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true));
    API.updateStatus(status).then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(isFetchingAC(false));
                dispatch(getUserStatusAC(status))
            }
            if (res.data.resultCode === 1) {
                dispatch(isFetchingAC(false));
                dispatch(setErrorAC(res.data.messages));
            }
        }
    )
}
