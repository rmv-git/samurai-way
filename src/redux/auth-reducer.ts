type InitialStateType = {
    isAuth: boolean;
}

const initialState: InitialStateType = {
    isAuth: false,
}
export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state, isAuth: action.isAuth
            }
        default:
            return state;
    }
}

type AuthReducerActionType = AuthActionType;

type AuthActionType = {
    type: 'IS_AUTH';
    isAuth: boolean;
}

export const authAC = (isAuth: boolean): AuthActionType => {
    return {
        type: 'IS_AUTH',
        isAuth,
    }
}
