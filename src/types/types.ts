export type PostType = {
    id: number;
    text: string;
    likesCount: number;
}

export type UserType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    text: string;
}

export type ProfilePageType = {
    arrayPosts: Array<PostType>;
}
export type DialogsPageType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
}
export type SideBarType = {
    arrayUsers: Array<UserType>;
}
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SideBarType;
}