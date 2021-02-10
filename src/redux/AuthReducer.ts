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
    isFatch: boolean
}

let initialState = {
    email: null,
    userId: null,
    login: null,
    isFatch: false

}

export const AuthReducer = (state: authInitialStateType = initialState, action: ActionsTypes): authInitialStateType => {

    switch (action.type) {
        case 'SET-USER-AUTH':
            return {
                ...state,
                ...action.data,
                isFatch: true
            }
        default:
            return state
    }
}

export const setUserAuth = (email: string, id: number, login: string) => {

    return {type: SET_USER_AUTH, data: {email, id, login}} as const
}


export default AuthReducer