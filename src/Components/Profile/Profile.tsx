import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;
