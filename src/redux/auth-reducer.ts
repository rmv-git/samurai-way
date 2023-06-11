type InitialStateType = {
    isAuth: boolean;
    id: number | null;
    login: string | null;
    email: string | null;
}

const initialState: InitialStateType = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
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
        default:
            return state;
    }
}

type AuthReducerActionType = AuthActionType | GetAuthDataActionType;

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
