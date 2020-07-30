import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}/>
        </div>
    );
}


export default Profile;
