import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.css';


type propsType = {
    profile: string
    userName: string
    description: string
    status: string
}

function Profile(props: propsType) {

    return (
        <div className={'profile_main'}>
            <ProfileInfo profile={props.profile} userName={props.userName} status={props.status}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;
