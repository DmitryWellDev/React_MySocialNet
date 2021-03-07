import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const SET_USER_AUTH = 'SET-USER-AUTH'

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

export const SetUserAuthTC = () => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getUserAuth()
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                let {email, id, login} = res.data.data
                dispatch(setUserAuth(email, id, login))
            }
        })
}


export default AuthReducer