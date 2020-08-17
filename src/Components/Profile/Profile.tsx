import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: ReduxStoreType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}


export default Profile;
