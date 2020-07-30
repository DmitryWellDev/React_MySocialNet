import React from 'react';
import styles from './Message.module.css'


type MessagePropsType = {
    id: number
    message:string
}

const Message = (props: MessagePropsType) => {
    return <div className={styles.item}>{props.message}</div>
}





export default Message;
