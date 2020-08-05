import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, profilePageType, StoreType} from "../../../redux/state";


type MyPostsPropsType = {
    profilePage: profilePageType
    // addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    //store: StoreType
}


// const addPostActionCreator = () => {
//     return {type: 'ADD-POST',
//         newPost: props.profilePage.newPostText
// }


function MyPosts(props: MyPostsPropsType) {
// ?
    let addPost = () => {
        //props.addPost(props.profilePage.newPostText)
        props.dispatch({type: 'ADD-POST', newPost: props.profilePage.newPostText})
    }
//?
    let postDataElement = props.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
    }

    return (
        <div className={styles.myPosts_wrap}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.profilePage.newPostText}
                          onChange={onPostChange}/>
                <button onClick={addPost}>Add Post</button>
                <button>Remove</button>
            </div>
            <div>
                {postDataElement}
            </div>
        </div>
    );

}

export default MyPosts;
