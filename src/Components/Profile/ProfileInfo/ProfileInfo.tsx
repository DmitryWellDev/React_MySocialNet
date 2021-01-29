import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader";
import mockUserImage from '../../../assets/images/ava.png';

const ProfileInfo = (props: any) => {
    console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }
    const descriptionMock = 'STATUS: Just silence'
    return (
        <div>
            <div>
                <img className={styles.userImage} src={props.profile.photos.large ? props.profile.photos.large : mockUserImage}/>
                <div className={styles.name}>{props.profile.fullName}</div>
                <div className={styles.status}>{props.profile.aboutMe !== null ? props.profile.aboutMe : descriptionMock}</div>
            </div>
        </div>
    )
}

export default ProfileInfo