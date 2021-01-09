import React from 'react';
import styles from './Aside.module.css';
import {SitebarElementType} from "../../redux/store";

type AsidePropsType = {
    sitebar: Array<SitebarElementType>
}

const Aside = (props: AsidePropsType) => {

    let sitebarElement = props.sitebar.map((elem, index) => {
       return <div> <img className={styles.friendsItem_photo} src={elem.photo}/><li key={index} className={styles.friendsItem}
                                     id={elem.name}>{elem.name}</li></div>
    })

    return (
        <div className={styles.main}>
            <h3 className={styles.friendsTitle}>Frinds</h3>
            {sitebarElement}
        </div>
    );
}


export default Aside;
