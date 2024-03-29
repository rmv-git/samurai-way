import axios from "axios";
import {
    GetUsersResponseType, Nullable,
    ResponseType, UserContactsResponseType,
    UserProfileResponseType,
} from "../types/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '572e1a8a-45f3-47bb-ae0b-b4ef4ceb038e',
    }
});

export const API = {
    getAllUsers() {
        return (
            instance.get(`users`).then(
                res => res.data
            )
        )
    },
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}/`).then(
                res => res.data
            )
        )
    },
    follow(userId: Nullable<number>) {
        return (
            instance.post<ResponseType>(`follow/${userId}`)
        )
    },
    unfollow(userId: Nullable<number>) {
        return (
            instance.delete<ResponseType>(`follow/${userId}`)
        )
    },
    getUserProfile(userId: number) {
        return (
            instance.get<UserProfileResponseType>(`profile/${userId}`)
        )
    },
    auth() {
        return (
            instance.get<ResponseType<{
                id: Nullable<number>,
                email: Nullable<string>,
                login: Nullable<string>,
            }>>(`auth/me`)
        )
    },
    login(email: Nullable<string>, password: Nullable<string>, rememberMe: boolean) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    updateProfile(contacts: UserContactsResponseType, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string) {
        return instance.put(`profile`, {contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName})
    }
}