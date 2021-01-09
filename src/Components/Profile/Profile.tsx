import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.css';




function Profile(props: any) {

    return (
        <div className={'profile_main'}>
            <ProfileInfo profile={props.profile} userName={props.userName} description={props.description}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;
