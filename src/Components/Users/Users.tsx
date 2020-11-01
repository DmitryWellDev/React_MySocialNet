import React from "react";
import styles from "./Users.module.css";
import userImage from "../../assets/images/photo.jpg";
import {UserType} from "../../redux/Users-Reducer";

type UsersPropsType = {
    users: Array<UserType>
    Follow: (userId: number) => void
    Unfollow: (userId: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return(
        <div>
            <div>
                {pages.map((p) => {
                    return <span onClick={(e) => {props.onPageChanged(p)}} className={`${styles.itemStyle}${props.currentPage === p ? styles.pageIndication : ''}`}>{p}</span>
                })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <div className={styles.main_wrap}>
                        <div>
                            <img className={styles.item_image}
                                 src={u.photos.small != null ? u.photos.small : userImage}/>

                            {u.followed
                                ? <button onClick={() => {
                                    props.Unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.Follow(u.id)
                                }}>follow</button>}
                        </div>
                        <div className={styles.dataList}>
                            <div className={`${styles.dataItem} ${styles.dataItem_name}`}>{u.name}</div>
                            <div className={styles.dataItem}>{"u.location.country"}</div>
                            <div className={styles.dataItem}>{u.status}</div>
                            <div className={styles.dataItem}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}