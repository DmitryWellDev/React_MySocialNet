import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


export type StateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

export type UserType = {
    followed: boolean
    id: number
    name: string
    location: UserLocationType
    status: string
    photos: userPhotoType
}

type userPhotoType = {
    small: string | undefined
    large: string | undefined
}

type UserLocationType = {
    country: string
    city: string
}


let initialState = {
    users: [],
    pageSize: 5,
    totalCount:20,
    currentPage:1,
    isFetching: true
}

const UsersReducer = (state: StateType = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return {...u}
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return {...u}
                })
            }
        case 'SET-USERS':
            return {
                ...state, users: [...action.users]
            }
        case 'CHANGE-CURRENT-PAGE':
            return {...state, currentPage: action.newPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const Follow = (userId: number) => {
    return {type: FOLLOW, userId, followed:true} as const
}
export const Unfollow = (userId: number) => {
    return {type: UNFOLLOW, userId, followed:false} as const
}
export const SetUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const ChangeCurrentPage = (newPage: number) => {
    return {type: CHANGE_CURRENT_PAGE, newPage} as const
}
export const SetTotalCount = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT, totalCount} as const
}
export const ToggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}

export default UsersReducer