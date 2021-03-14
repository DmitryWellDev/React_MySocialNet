import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '5a98b02d-fc25-4d4c-80d0-9acdb32eea66'}
});


export const usersAPI = {
    setUsers(currentPage: number, pageSize: number) {
const promise = instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return promise
    },
    getUserPage(pageNumber: number, pageSize: number) {
const promise = instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        return promise
    },
    follow(userId: number) {
const promise = instance.post(`follow/${userId}`, {})
        return promise
    },
    unfollow(userId: number) {
const promise = instance.delete(`follow/${userId}`)
        return promise
    },
    getUserProfile(userId: number) {
const promise = instance.get(`/profile/${userId}`)
        return promise
    },
    getUserAuth() {
const promise = instance.get(`auth/me`)
        return promise
    },

};


export type CategoriesResponseType = {
    data:Array<string>
}

export type r = {
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}
