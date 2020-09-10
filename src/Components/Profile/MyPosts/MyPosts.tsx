import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {profilePageType, RootStateType} from "../../../redux/store";


type MyPostsPropsType = {
    addPost: (text: string) => void
    updateNewPostText: (newText: string) => void
    profilePage: profilePageType
    newPostText: string
}


function MyPosts(props: MyPostsPropsType) {

    let addPost = () => {
        props.addPost(props.profilePage.newPostText)
    }

    let postDataElement = props.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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
