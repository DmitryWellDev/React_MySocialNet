import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/store";
import { Redirect } from 'react-router-dom';


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

    let cleanFieldAfterClick = () => {
        props.addPost(props.profilePage.newPostText = '')
    }

        return (
            <div className={styles.myPosts_wrap}>
                <p className={styles.myPosts_title}>My posts</p>
                <div className={styles.masseges_wrap}>
                <textarea onClick={cleanFieldAfterClick} className={styles.myPosts_textField}
                          value={props.profilePage.newPostText}
                          onChange={onPostChange}/>
                    <div className={styles.myPostsButtons_wrap}>
                        <button className={styles.myPosts_button} onClick={addPost}>Add Post</button>
                        <button className={styles.myPosts_button}>Remove</button>
                    </div>
                </div>
                <div>
                    {postDataElement}
                </div>
            </div>
        );
}


export default MyPosts;
