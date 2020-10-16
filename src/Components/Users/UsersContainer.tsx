import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../redux/Users-Reducer";


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        Follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        Unfollow: (userId: number) => {
            dispatch(UnfollowAC(userId))
        },
        SetUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;

