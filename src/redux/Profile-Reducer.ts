import {ActionsTypes, PostType, profilePageType, RootStateType, StoreType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: "hi", likes: 15},
        {id: 2, message: "Hello!", likes: 20},
        {id: 3, message: "Harry Crishna!", likes: 25}
    ],
    newPostText: 'React way of SAMURAI'
}

const ProfileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {
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
        default:
            return state
    }
}

export const AddPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newPost: text
    } as const
}

export const UpdateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default ProfileReducer