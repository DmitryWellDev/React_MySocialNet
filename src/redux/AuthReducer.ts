import {ActionsTypes} from "./store";

const SET_USER_AUTH = 'SET-USER-AUTH'



// export type StateType = {
//     users: Array<UserType>
//     pageSize: number
//     totalCount: number
//     currentPage: number
//     isFetching: boolean
// }
//
// export type UserType = {
//     followed: boolean
//     id: number
//     name: string
//     location: UserLocationType
//     status: string
//     photos: userPhotoType
// }
//
// type userPhotoType = {
//     small: string | undefined
//     large: string | undefined
// }
//
// type UserLocationType = {
//     country: string
//     city: string
// }
//
//

export type authInitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
}

let initialState = {
    userId: null,
    email: null,
    login: null

}

export const AuthReducer = (state: authInitialStateType = initialState, action: ActionsTypes): authInitialStateType => {
    switch (action.type) {
        case 'SET-USER-AUTH':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserAuth = (userId: number, email: string, login: string) => {
    return {type: SET_USER_AUTH, data: {userId, email, login}} as const
}


export default AuthReducer