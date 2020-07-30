import React from 'react';
import styles from './Post.module.css';

type PropsPostType = {
    message: string
    likes: number
}

function Post(props: PropsPostType) {
    return (
        <div className={styles.posts_item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSock3_VhxT2Srd6NIPVn9RdI6vXxHlzV5li375-2uKQBIkiB4d&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span className={styles.post_like}>like: {props.likes}</span>
            </div>
        </div>
    );
}


export default Post;
