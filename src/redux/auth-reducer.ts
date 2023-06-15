import {Dispatch} from "redux";
import {API} from "../api/API";
import {Nullable} from "../types/types";

type InitialStateType = {
    isAuth: boolean;
    id: Nullable<number>;
    login: Nullable<string>;
    email: Nullable<string>;
    password: Nullable<string>;
    rememberMe: boolean;
}

const initialState: InitialStateType = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
    password: null,
    rememberMe: false,
}
export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state, isAuth: action.isAuth
            }
        case 'GET_AUTH_DATA':
            return {
                ...state, id: action.id, email: action.email, login: action.login
            }
        case 'LOGIN':
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe
            }
        default:
            return state;
    }
}

type AuthReducerActionType = AuthActionType | GetAuthDataActionType | LoginActionType;

type AuthActionType = ReturnType<typeof authAC>;
type GetAuthDataActionType = ReturnType<typeof getAuthDataAC>;
type LoginActionType = ReturnType<typeof loginAC>;

export const authAC = (isAuth: boolean) => {
    return {
        type: 'IS_AUTH',
        isAuth,
    } as const
}
export const getAuthDataAC = (id: Nullable<number>, login: Nullable<string>, email: Nullable<string>) => {
    return {
        type: 'GET_AUTH_DATA',
        id,
        login,
        email
    } as const
}

export const loginAC = (email: Nullable<string>, password: Nullable<string>, rememberMe: boolean) => {
    return {
        type: 'LOGIN',
        email,
        password,
        rememberMe,
    } as const
}

export const loginThunk = (email: Nullable<string>, password: Nullable<string>, rememberMe: boolean) => (dispatch: Dispatch) => {
    API.login(email, password, rememberMe).then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(loginAC(email, password, rememberMe))
            }
        }
    )
}

export const logoutThunk = () => (dispatch: Dispatch) => {
    API.logout().then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(loginAC('', '', false))
            }
        }
    )
}

export const isAuthThunk = (id: Nullable<number>, login: Nullable<string>, email: Nullable<string>) => (dispatch: Dispatch) => {
    API.auth().then(
        res => {
            if (res.data.resultCode === 0 ) {
                dispatch(getAuthDataAC(id, login, email));
                dispatch(authAC(true));
            }
        }
    )
}
