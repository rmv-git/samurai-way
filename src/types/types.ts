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

export type DialogsPageType = {
    arrayMessages: MessageType[];
    arrayUsers: UserType[];
    newMessageText: string;
}
export type SideBarType = {
    arrayUsers: Array<UserType>;
}

export type Nullable<T> = T | null;

export type PhotosResponseType = {
    small: string | undefined,
    large: string | undefined,
}
export type UserResponseType = {
    name: Nullable<string>,
    id: number,
    photos: PhotosResponseType,
    status: Nullable<string>,
    followed: boolean
}
export type GetUsersResponseType = {
    items: UserResponseType[],
    totalCount: number,
    error: string | null,
}
export type UserContactsResponseType = {
    github: Nullable<string>;
    vk: Nullable<string>;
    facebook: Nullable<string>;
    instagram: Nullable<string>;
    twitter: Nullable<string>;
    website: Nullable<string>;
    youtube: Nullable<string>;
    mainLink: Nullable<string>;
}
export type UserProfileResponseType = {
    userId: Nullable<number>;
    lookingForAJob: boolean;
    lookingForAJobDescription: Nullable<string>;
    fullName: Nullable<string>;
    contacts: UserContactsResponseType;
    photos: PhotosResponseType;
}
export type ResponseType<T = {}> = {
    resultCode: number,
    messages: string[],
    data: T
}
