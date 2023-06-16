import {UserResponseType} from "../types/types";
import {Dispatch} from "redux";
import {isFetchingAC} from "./app-reducer";
import {API} from "../api/API";

type InitialStateType = {
    items: UserResponseType[];
}
const initialState: InitialStateType = {
    // arrayUsers: [
    //     {id: 1, name: 'Viktor'},
    //     {id: 2, name: 'Dimych'},
    //     {id: 4, name: 'Valera'},
    // ],
    items: [],
}
export const sidebarReducer = (state = initialState, action: SidebarActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return {
                ...state, items: [...action.items]
            }
        default:
            return state;
    }
}

type SidebarActionsType = GetAllUsersType;

type GetAllUsersType = ReturnType<typeof getAllUsersAC>;
const getAllUsersAC = (items: UserResponseType[]) => {
    return {
        type: 'GET_ALL_USERS',
        items
    } as const
}

export const getAllUsersThunk = () => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true));
    API.getAllUsers().then(
        res => {
            dispatch(getAllUsersAC(res.items));
            dispatch(isFetchingAC(false));
        }
    )
}