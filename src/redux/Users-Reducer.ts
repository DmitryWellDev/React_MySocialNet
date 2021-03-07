import {Dispatch} from 'redux'
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


export type StateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    followed: boolean
    id: number
    name: string
    location: UserLocationType
    status: string
    photos: userPhotoType
}

export type userPhotoType = {
    small: string | undefined | null
    large: string | undefined | null
}

export type ActionsTypes =
    | ReturnType<typeof Follow>
    | ReturnType<typeof Unfollow>
    | ReturnType<typeof SetUsers>
    | ReturnType<typeof ChangeCurrentPage>
    | ReturnType<typeof SetTotalCount>
    | ReturnType<typeof ToggleIsFetching>
    | ReturnType<typeof ToggleFollowingProgress>

type UserLocationType = {
    country: string
    city: string
}

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const Follow = (userId: number) => {
    console.log(userId)
    return {type: FOLLOW, userId, followed: true} as const
}
export const Unfollow = (userId: number) => {
    return {type: UNFOLLOW, userId, followed: false} as const
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
export const ToggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}


export const SetUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.setUsers(currentPage, pageSize)
        .then((response: any) => {
            dispatch(ToggleIsFetching(false))
            dispatch(SetUsers(response.data.items))
        })
        }

        export const GetUserPageTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch<ActionsTypes>) => {
            ChangeCurrentPage(pageNumber)
           dispatch(ToggleIsFetching(true))
            usersAPI.getUserPage(pageNumber, pageSize)
                .then((response: any) => {
                    dispatch(ToggleIsFetching(false))
                    dispatch(SetUsers(response.data.items))
                    dispatch(SetTotalCount(response.data.totalCount))
                })
        }

        export const FollowTC = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
            dispatch(ToggleFollowingProgress(true, userId))
            usersAPI.follow(userId)
                .then((response: any) => {
                    if (response.data.resultCode == 0) {
                        dispatch(Follow(userId))
                    }
                    dispatch(ToggleFollowingProgress(false, userId))
                })
        }
        export const UnfollowTC = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
            dispatch(ToggleFollowingProgress(true, userId))
            usersAPI.unfollow(userId)
                .then((response: any) => {
                    if (response.data.resultCode == 0) {
                        dispatch(Unfollow(userId))
                    }
                    dispatch(ToggleFollowingProgress(false, userId))
                })
        }

export default UsersReducer