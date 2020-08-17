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
            let newPost: PostType = {
                id: 4,
                message: action.newPost,
                likes: 12
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
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

export const UpdateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export default ProfileReducer