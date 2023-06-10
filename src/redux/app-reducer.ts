

type InitialStateType = {
    isFetching: boolean;
}
const initialState: InitialStateType = {
    isFetching: false,
}

export const appReducer = (state = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

type IsFetchingActionType = {
    type: 'IS_FETCHING';
    isFetching: boolean;
}

type AppReducerActionsType = IsFetchingActionType;


export const isFetchingAC = (isFetching: boolean): IsFetchingActionType => {
    return {
        type: 'IS_FETCHING',
        isFetching
    }
}