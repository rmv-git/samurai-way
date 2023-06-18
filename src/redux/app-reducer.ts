import {Dispatch} from "redux";
import {API} from "../api/API";
import {getUserProfileAC} from "./profile-reducer";
import {authAC, getAuthDataAC, isAuthThunk, loginThunk} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";


type InitialStateType = {
    isFetching: boolean;
    isInitialized: boolean;
}
const initialState: InitialStateType = {
    isFetching: false,
    isInitialized: false,
}

export const appReducer = (state = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'IS_INITIALIZED_APP':
            return {
                ...state, isInitialized: action.isInitialized
            }
        default:
            return state;
    }
}

type IsFetchingActionType = {
    type: 'IS_FETCHING';
    isFetching: boolean;
}
type IsInitializedAppActionType = {
    type: 'IS_INITIALIZED_APP';
    isInitialized: boolean;
}

type AppReducerActionsType = IsFetchingActionType | IsInitializedAppActionType;


export const isFetchingAC = (isFetching: boolean): IsFetchingActionType => {
    return {
        type: 'IS_FETCHING',
        isFetching
    }
}
export const appInitializing = (isInitialized: boolean): IsInitializedAppActionType => {
    return {
        type: 'IS_INITIALIZED_APP',
        isInitialized,
    }
}

export const appInitializingThunk = (isInitialized: boolean): ThunkAction<void, RootStateType, unknown, any> => (dispatch) => {
    let promise = dispatch(isAuthThunk());
    Promise.all([promise]).then(() => {
        dispatch(appInitializing(isInitialized))
    })
}