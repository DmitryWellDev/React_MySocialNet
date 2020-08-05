import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType, StoreType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: profilePageType
    // addPost: (newText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    // store:StoreType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch.bind(props)}                                                              // addPost={props.store.addPost.bind(props.store)}
            />
        </div>
    );
}


export default Profile;
