type AddPostActionType = {
    type: 'ADD_POST';
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT';
    value: string;
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType;
