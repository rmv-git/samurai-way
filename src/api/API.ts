import axios from "axios";
import {
    AuthResponseType,
    ResponseFollow,
    ResponseType,
    UserProfileResponseType,
    UserResponseType
} from "../types/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '572e1a8a-45f3-47bb-ae0b-b4ef4ceb038e',
    }
});

export const API = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<ResponseType<UserResponseType[]>>(`users?page=${currentPage}&count=${pageSize}/`).then(
                res => res.data
            )
        )
    },
    follow(userId: number) {
        return (
            instance.post(`follow/${userId}`)
        )
    },
    unfollow(userId: number) {
        return (
            instance.delete<ResponseFollow>(`follow/${userId}`)
        )
    },
    getUserProfile(userId: number) {
        return (
            instance.get<UserProfileResponseType>(`profile/${userId}`)
        )
    },
    auth() {
        return (
            instance.get<AuthResponseType<{ id: number, email: string, login: string, }>>(`auth/me`)
        )
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<AuthResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<AuthResponseType>(`auth/login`)
    }
}