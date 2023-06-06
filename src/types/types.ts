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
    newPostText: string;
}
export type DialogsPageType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
    newMessageText: string;
}
export type SideBarType = {
    arrayUsers: Array<UserType>;
}
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SideBarType;
}

export type StoreType = {
    _state: StateType;
    _renderThree: (_state: StateType) => void;
    getState: () => StateType;
    subscribe: (observer: () => void) => void;
    dispatch: (action: any) => void;
}

export type PhotosResponseType = {
    small: string | undefined,
    large: string | undefined,
}
export type UserResponseType = {
    name: string,
    id: number,
    photos: PhotosResponseType,
    status: string | null,
    followed: boolean
}
export type UsersResponseType = {
    items: UserResponseType[],
    totalCount: number,
    error: string | null,
}
export type ResponseType<T = {}> = {
    totalCount: number,
    error: string | null,
    items: T
}

export type ResponseFollow = {
    resultCode: number,
    messages: Array<string>,
    data: {},
}
