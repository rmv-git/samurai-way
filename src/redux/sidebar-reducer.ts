import {ActionsType} from "../types/actions";
import {SideBarType} from "../types/types";

export const sidebarReducer = (state: SideBarType, action: ActionsType): SideBarType => {
    switch (action.type) {
        default:
            return state;
    }
}
