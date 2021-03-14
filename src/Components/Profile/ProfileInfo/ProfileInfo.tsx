import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader";
import mockUserImage from '../../../assets/images/ava.png';

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const statusMock = 'STATUS: Just silence'
    return (
        <div>
            <div>
                <img className={styles.userImage} src={props.profile.photos.large ? props.profile.photos.large : mockUserImage}/>
                <div className={styles.name}>{props.profile.fullName}</div>
                <div className={styles.status}>{props.status}</div>
            </div>
        </div>
    )
}

export default ProfileInfo