import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {RootStateType} from "../../../redux/store";


type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    state: RootStateType
}


function MyPosts(props: MyPostsPropsType) {

    let addPost = () => {
        props.addPost(props.state.profilePage.newPostText)
        //props.dispatch(AddPostActionCreator(props.profilePage.newPostText))
    }

    let postDataElement = props.state.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        //props.dispatch(UpdateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={styles.myPosts_wrap}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.state.profilePage.newPostText}
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
