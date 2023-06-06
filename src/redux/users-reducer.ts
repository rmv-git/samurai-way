import {UserResponseType} from "../types/types";

type InitialStateType = {
    items: UserResponseType[];
    totalCount: number;
    error: string | null;
    currentPage: number,
    pageSize: number,
}

const initialState: InitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    currentPage: 1000,
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
        default:
            return state;
    }
}

type UsersReducerActionsType = GetUsersActionType | FollowUserActionType | UnfollowUserActionType;

type GetUsersActionType = {
    type: 'GET_USERS',
    items: UserResponseType[],
    totalCount: number,
}
type FollowUserActionType = {
    type: 'FOLLOW',
    userId: number,
}
type UnfollowUserActionType = {
    type: 'UNFOLLOW',
    userId: number,
}

export const getUsersAC = (items: UserResponseType[], totalCount: number): GetUsersActionType => {
    return {
        type: 'GET_USERS',
        items,
        totalCount,
    }
}

export const followUserAC = (userId: number): FollowUserActionType => {
    return {
        type: 'FOLLOW',
        userId,
    }
}
export const unFollowUserAC = (userId: number): UnfollowUserActionType => {
    return {
        type: 'UNFOLLOW',
        userId,
    }
}
