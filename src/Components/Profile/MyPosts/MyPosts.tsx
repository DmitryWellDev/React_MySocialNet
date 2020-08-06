import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    AddPostActionCreator,
    profilePageType,
    StoreType,
    UpdateNewPostTextActionCreator
} from "../../../redux/state";


type MyPostsPropsType = {
    profilePage: profilePageType
    // addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    //store: StoreType
}


function MyPosts(props: MyPostsPropsType) {

    let addPost = () => {
        //props.addPost(props.profilePage.newPostText)
        props.dispatch(AddPostActionCreator(props.profilePage.newPostText))
    }

    let postDataElement = props.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch(UpdateNewPostTextActionCreator(e.currentTarget.value))
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
