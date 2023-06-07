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
type SelectPageActionType = {
    type: 'SELECT_PAGE',
    page: number,
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

export const selectPageAC = (page: number): SelectPageActionType => {
    return {
        type: 'SELECT_PAGE',
        page,
    }
}
