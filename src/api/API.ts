import axios from "axios";
import {ResponseType, UserResponseType, UsersResponseType} from "../types/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '572e1a8a-45f3-47bb-ae0b-b4ef4ceb038e',
    }
});

export const API = {
    getUsers() {
        return (
            instance.get<ResponseType<UserResponseType[]>>(`users`).then(
                res => res.data
            )
        )
    }
}