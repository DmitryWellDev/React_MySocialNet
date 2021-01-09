import React from 'react';
import styles from './Post.module.css';
import usersRequestImage from './../../../../assets/images/usersRequestImage.png'

type PropsPostType = {
    message: string
    likes: number
}

function Post(props: PropsPostType) {
    return (
        <div className={styles.posts_item}>
            <img
                src={usersRequestImage}
                alt=""/>
            <span className={styles.posts_message}>{props.message}</span>
            <div>
                <span className={styles.post_like}>like: {props.likes}</span>
            </div>
        </div>
    );
}


export default Post;
