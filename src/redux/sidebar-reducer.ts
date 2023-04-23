import {ActionsType} from "../types/actions";
import {SideBarType} from "../types/types";

const initialState: SideBarType = {
    arrayUsers: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Dimych'},
        {id: 4, name: 'Valera'},
    ],
}
export const sidebarReducer = (state = initialState, action: ActionsType): SideBarType => {
    switch (action.type) {
        default:
            return state;
    }
}
