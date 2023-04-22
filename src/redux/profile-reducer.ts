import {PostType, ProfilePageType} from "../types/types";
import {ActionsType} from "../types/actions";

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                text: state.newPostText,
                likesCount: 0,
            };
            if (state.newPostText !== '') {
                state.arrayPosts.push(newPost);
            }
            state.newPostText = '';
            return state;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.value;
            return state;
        default:
            return state;
    }
}
