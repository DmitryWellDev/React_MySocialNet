import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={styles.content_image}
                     src="https://www.azocleantech.com/images/news/ImageForNews_26919_15786618897301054.png"
                     alt=""/>
            </div>
            <div>
                avatar+descr
            </div>
        </div>
    )
}

export default ProfileInfo