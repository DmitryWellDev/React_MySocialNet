import React from 'react';
import {ReduxStoreType, RootStateType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from '../../../redux/Profile-Reducer'
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


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
