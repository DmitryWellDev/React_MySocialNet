import {ActionsTypes, PostType, profilePageType, RootStateType, StoreType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'
const SET_USER_NAME = 'SET-USER-NAME'
const USER_DESCRIPTION = 'USER-DESCRIPTION'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

let initialState = {
    posts: [
        {id: 1, message: "hi", likes: 15},
        {id: 2, message: "Hello!", likes: 20},
        {id: 3, message: "Harry Crishna!", likes: 25}
    ],
    newPostText: 'Your Message',
    profile: null,
    userName: null,
    description: null,
    status: null
}

const ProfileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: state.newPostText, likes: 12}],
                newPostText: ''
            }

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-PROFILE': {

            return {...state, profile: action.profile}
        }
        case 'SET-USER-NAME': {
            return {...state, userName: action.userName}
        }
        case 'USER-DESCRIPTION': {
            return {...state, description: action.descriptionText}
        }
        case 'SET-PROFILE-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const AddPostActionCreator = (text: string) => {
    return {type: ADD_POST, newPost: text} as const
}

export const UpdateNewPostTextActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export const SetProfile = (profile: any) => {

    return {type: SET_PROFILE, profile} as const
}

export const setUserName = (userName: any) => {
    return {type: SET_USER_NAME, userName} as const
}

export const setDescription = (descriptionText: any) => {
    return {type: USER_DESCRIPTION, descriptionText} as const
}

export const setProfileStatus = (status: string) => {
    return {type: SET_PROFILE_STATUS, status} as const
}

export default ProfileReducer