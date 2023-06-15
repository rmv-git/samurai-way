import {Nullable, UserResponseType} from "../types/types";
import {Dispatch} from "redux";
import {API} from "../api/API";
import {isFetchingAC} from "./app-reducer";

type InitialStateType = {
    items: UserResponseType[];
    totalCount: number;
    error: Nullable<string>;
    currentPage: number,
    pageSize: number,
}

const initialState: InitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 10,
}
export const usersReducer = (state = initialState, action: UsersReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, items: [...action.items], totalCount: action.totalCount
            }
        case 'FOLLOW':
            return {
                ...state,
                items: state.items.map((user: UserResponseType) =>
                    user.id === action.userId ? {...user, followed: true} : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                items: state.items.map((user: UserResponseType) =>
                    user.id === action.userId ? {...user, followed: false} : user)
            }
        case 'SELECT_PAGE':
            return {
                ...state, currentPage: action.page,
            }
        default:
            return state;
    }
}

type UsersReducerActionsType = GetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | SelectPageActionType;

type GetUsersActionType = ReturnType<typeof getUsersAC>;
type FollowUserActionType = ReturnType<typeof followUserAC>;
type UnfollowUserActionType = ReturnType<typeof unFollowUserAC>;
type SelectPageActionType = ReturnType<typeof selectPageAC>;

export const getUsersAC = (items: UserResponseType[], totalCount: number) => {
    return {
        type: 'GET_USERS',
        items,
        totalCount,
    } as const
}

export const followUserAC = (userId: Nullable<number>) => {
    return {
        type: 'FOLLOW',
        userId,
    } as const
}
export const unFollowUserAC = (userId: Nullable<number>) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}

export const selectPageAC = (page: number) => {
    return {
        type: 'SELECT_PAGE',
        page,
    } as const
}

export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true));
    API.getUsers(currentPage, pageSize).then(
        res => {
            dispatch(getUsersAC(res.items, res.totalCount));
            dispatch(isFetchingAC(false));
        }
    )
}

export const selectPageThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(selectPageAC(currentPage));
    API.getUsers(currentPage, pageSize).then(
        res => {
            dispatch(getUsersAC(res.items, res.totalCount));
        }
    )
}

export const followUserThunk = (userId: Nullable<number>) => (dispatch: Dispatch) => {
    API.follow(userId).then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(followUserAC(userId));
            }
        }
    )
}
export const unfollowUserThunk = (userId: number) => (dispatch: Dispatch) => {
    API.unfollow(userId).then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowUserAC(userId));
            }
        }
    )
}

