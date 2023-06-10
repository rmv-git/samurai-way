import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    appReducer,
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch | any;
export const useAppDispatch: () => AppDispatch = useDispatch

//@ts-ignore
window.store = store;
