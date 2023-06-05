import {UserResponseType, UsersResponseType} from "../types/types";

const initialState: any = {
    items: [],
    totalCount: 0,
    error: null,
    currentPage: 1000,
    pageSize: 10,
}
export const usersReducer = (state = initialState, action: UsersReducerActionsType): any => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, items: [...action.items], totalCount: action.totalCount
            }
        default:
            return state;
    }
}

type UsersReducerActionsType = GetUsersActionType;

type GetUsersActionType = {
    type: 'GET_USERS',
    items: UserResponseType[],
    totalCount: number,
}

export const getUsersAC = (items: UserResponseType[], totalCount: number): GetUsersActionType => {
    return {
        type: 'GET_USERS',
        items,
        totalCount,
    }
}
