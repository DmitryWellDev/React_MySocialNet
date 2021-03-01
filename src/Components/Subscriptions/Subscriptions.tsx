import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import styles from "../Users/Users.module.css";
import {NavLink} from "react-router-dom";
import userImage from "../../assets/images/usersRequestImage.png";
import {userPhotoType} from "../../redux/Users-Reducer";



type userType = {
    followed: boolean
    id: number
    name: string
    photos: userPhotoType
    status?: null
    uniqueUrlName?: null
}

export const Subscriptions = () => {

    const Users = useSelector<RootStateType, any>((state) => {
        return state.usersPage.users
    })
    console.log(Users)

    const followedUsers = Users.filter((el: userType) => {
       if (el.followed === true) {
           return el
       }
    })


    return (
        <div>
            {
                followedUsers.map((u: any) => <div key={u.id}>
                        {console.log(u)}
                        <div className={styles.main_wrap}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.item_image}
                                         src={u.photos.small != null ? u.photos.small : userImage}/>
                                </NavLink>
                                <div>{u.name}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}