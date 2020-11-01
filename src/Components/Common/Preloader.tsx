import React from "react";
import styles from './Preloader.module.css';
import preloader from './../../assets/images/Cube-1s-200px.gif'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}