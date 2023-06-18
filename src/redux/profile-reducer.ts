import {PostType, UserProfileResponseType} from "../types/types";
import {Dispatch} from "redux";
import {API} from "../api/API";
import {isFetchingAC} from "./app-reducer";

type InitialStateType = {
    newPostText: string;
    arrayPosts: Array<PostType>;
    profile: UserProfileResponseType;
    status: string;
}
const initialState: InitialStateType = {
    newPostText: '',
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
            return {...state, profile: action.profile}
        case 'GET_USER_STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}

type AddPostActionType = ReturnType<typeof addPostAC>;
type NewPostTextActionType = ReturnType<typeof newPostTextAC>;
type GetUserProfileActionType = ReturnType<typeof getUserProfileAC>;
type GetUserStatusActionType = ReturnType<typeof getUserStatusAC>;

export type ProfileReducerActions =
    AddPostActionType
    | NewPostTextActionType
    | GetUserProfileActionType
    | GetUserStatusActionType;
export const addPostAC = () => {
    return {
        type: 'ADD_POST',
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
        }
    )
}