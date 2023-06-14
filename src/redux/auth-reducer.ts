import {Dispatch} from "redux";
import {API} from "../api/API";

type InitialStateType = {
    isAuth: boolean;
    id: number | null;
    login: string | null;
    email: string | null;
    password: string | null;
    rememberMe: boolean;
}

const initialState: InitialStateType = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
    password: null,
    rememberMe: true,
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

type AuthActionType = {
    type: 'IS_AUTH';
    isAuth: boolean;
}
type GetAuthDataActionType = {
    type: 'GET_AUTH_DATA';
    id: number | null;
    login: string | null;
    email: string | null;
}
type LoginActionType = {
    type: 'LOGIN';
    email: string | null;
    password: string | null;
    rememberMe: boolean;
}

export const authAC = (isAuth: boolean): AuthActionType => {
    return {
        type: 'IS_AUTH',
        isAuth,
    }
}
export const getAuthDataAC = (id: number | null, login: string | null, email: string | null): GetAuthDataActionType => {
    return {
        type: 'GET_AUTH_DATA',
        id,
        login,
        email
    }
}

export const loginAC = (email: string, password: string, rememberMe: boolean): LoginActionType => {
    return {
        type: 'LOGIN',
        email,
        password,
        rememberMe,
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
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
