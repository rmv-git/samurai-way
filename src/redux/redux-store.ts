import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";
import {appReducer} from "./app-reducer";
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    appReducer,
    authReducer,
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>
type ReducersType = typeof rootReducer;
export type AppStateType = ReturnType<ReducersType>;

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch | any;
export const useAppDispatch: () => AppDispatch = useDispatch

//@ts-ignore
window.store = store;
