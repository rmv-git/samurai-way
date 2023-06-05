import {UserResponseType, UsersResponseType} from "../types/types";

const initialState: UsersResponseType = {
    items: [],
    totalCount: 0,
    error: null,
}
export const usersReducer = (state = initialState, action: UsersReducerActionsType): UsersResponseType => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, items: [...action.items]
            }
        default:
            return state;
    }
}

type UsersReducerActionsType = GetUsersActionType;

type GetUsersActionType = {
    type: 'GET_USERS',
    items: UserResponseType[],
}

export const getUsersAC = (items: UserResponseType[]): GetUsersActionType => {
    return {
        type: 'GET_USERS',
        items,
    }
}
