import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
