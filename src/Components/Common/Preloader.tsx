import React from "react";
import styles from './Preloader.module.css';
import preloader from './../../assets/images/d1151f5f321f859c4d13f28cb71cf424_w200.gif'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}