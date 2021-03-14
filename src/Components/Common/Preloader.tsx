import React from "react";
import styles from './Preloader.module.css';
import preloader from './../../assets/images/200-unscreen.gif'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}