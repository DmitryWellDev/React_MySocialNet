import React from 'react';
import {ReduxStoreType, RootStateType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from '../../../redux/Profile-Reducer'
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";

// type MyPostsPropsType = {
//     store: ReduxStoreType
// }

// function MyPostsContainer(props: MyPostsPropsType) {
//
//     let state = props.store.getState()
//
//     let addPost = () => {
//         //props.addPost(props.profilePage.newPostText)
//         props.store.dispatch(AddPostActionCreator(props.store.getState().profilePage.newPostText))
//     }
//
//     let updateNewPostText = (text: string) => {
//         //props.updateNewPostText(e.currentTarget.value)
//         props.store.dispatch(UpdateNewPostTextActionCreator(text))
//     }
//
//     return (
//         <div className={styles.myPosts_wrap}>
//             <MyPosts addPost={addPost}
//                      updateNewPostText={updateNewPostText}
//                      state={state}/>
//         </div>
//     );
//
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToprops = (dispatch:Dispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(AddPostActionCreator(text))
        },
        updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostTextActionCreator(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToprops)(MyPosts)

export default MyPostsContainer;
