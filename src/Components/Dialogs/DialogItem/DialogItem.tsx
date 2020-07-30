import React from 'react';
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    photo: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return <div>
        <NavLink className={styles.dialog} to={'/dialogs/' + props.id}>
            <img className={styles.itemImage} src={props.photo}/>
            <span className={styles.itemTitle}>{props.name}</span></NavLink>
    </div>
}







export default DialogItem;
