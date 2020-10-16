import ProfileReducer from "./Profile-Reducer";
import {profilePageType} from "./store";

test('correct post should be added', () => {
    const startState: profilePageType = {
        posts: [
            {id: 1, message: "hi", likes: 15},
            {id: 2, message: "Hello!", likes: 20},
            {id: 3, message: "Harry Crishna!", likes: 25}
        ],
        newPostText: 'React way of SAMURAI'
    }

    const newPost = "React way of SAMURAI"

    const endState = ProfileReducer(startState, {type: "ADD-POST", newPost: newPost})

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].message).toBe(newPost)
})

test('ProfileReducer should add entered text correctly', () => {
    const startState: profilePageType = {
        posts: [
            {id: 1, message: "hi", likes: 15},
            {id: 2, message: "Hello!", likes: 20},
            {id: 3, message: "Harry Crishna!", likes: 25}
        ],
        newPostText: 'React way of SAMURAI'
    }

    const newText = 'New post text'

    const endState = ProfileReducer(startState, {type: 'UPDATE-NEW-POST-TEXT', newText: newText})

    expect(endState.newPostText).toBe(newText)
})