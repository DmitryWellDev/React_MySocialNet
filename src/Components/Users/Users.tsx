import React, {useState} from 'react';
import styles from "./Users.module.css";
import userImage from "../../assets/images/usersRequestImage.png";
import {UserType} from "../../redux/Users-Reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";



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
    let grovingPort = props.pageSize * 2
    let pagesCount = Math.ceil(props.totalCount / grovingPort)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = pagesCount
    let [portionNumber, setPortionNumber] = useState(1)
    let leftEdgeOfPortion = (portionNumber - 1) * grovingPort + 1
    let rightEdgeOfPortion = portionNumber * grovingPort

    return (
        <div className={styles.users_wrap}>
            <div className={styles.pageIndication_wrap}>
                <div>
                    {portionNumber > 1 && <button onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>prev</button>}
                </div>
                <div>
                    {pages.filter((p) => {
                        if (p >= leftEdgeOfPortion && p <= rightEdgeOfPortion) {
                            return p
                        }
                    }).map((p) => {
                        return <span
                            className={`${styles.itemStyle} ${props.currentPage == p ? styles.pageIndication : ''}`}
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}>{p}</span>
                    })}
                </div>
                {portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>next</button>}
            </div>
            <div className={styles.itemsList_wrap}>
                {
                    props.users.map((u: any) => <div key={u.id}>
                        <div className={styles.main_wrap}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.item_image}
                                         src={u.photos.small != null ? u.photos.small : userImage}/>
                                </NavLink>

                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '5a98b02d-fc25-4d4c-80d0-9acdb32eea66'}})
                                            .then((response: any) => {
                                                if (response.data.resultCode == 0) {
                                                    props.Unfollow(u.id)
                                                }
                                            })

                                    }}>unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '5a98b02d-fc25-4d4c-80d0-9acdb32eea66'}})
                                            .then((response: any) => {
                                                if (response.data.resultCode == 0) {
                                                    props.Follow(u.id)
                                                }
                                            })

                                    }}>follow</button>}
                            </div>
                            <div className={styles.dataList}>
                                <div className={styles.dataItemNameStat_wrep}>
                                    <NavLink to={'/profile/' + u.id} className={styles.dataItem_name}>
                                        <div>{u.name}</div>
                                    </NavLink>
                                    <div className={styles.dataItem_status}>{u.status}</div>
                                </div>
                                <div className={styles.dataItemCityCountry_wrep}>
                                    <div className={styles.dataItem}>{"country"}</div>
                                    <div className={styles.dataItem}>{"city"}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}