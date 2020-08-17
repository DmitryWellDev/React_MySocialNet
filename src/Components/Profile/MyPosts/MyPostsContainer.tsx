import React from 'react';
import styles from './MyPosts.module.css';
import {ReduxStoreType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from '../../../redux/Profile-Reducer'
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: ReduxStoreType
}

function MyPostsContainer(props: MyPostsPropsType) {

    let state = props.store.getState()

    let addPost = () => {
        //props.addPost(props.profilePage.newPostText)
        props.store.dispatch(AddPostActionCreator(props.store.getState().profilePage.newPostText))
    }

    let updateNewPostText = (text: string) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }

    return (
        <div className={styles.myPosts_wrap}>
            <MyPosts addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     state={state}/>
        </div>
    );

}

export default MyPostsContainer;
