import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    ChangeCurrentPageAC,
    FollowAC,
    SetTotalCountAC,
    SetUsersAC, ToggleIsFetchingAC,
    UnfollowAC,
    UserType
} from "../../redux/Users-Reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";

type UsersPropsType = {
    users: Array<UserType>
    Follow: (userId: number) => void
    Unfollow: (userId: number) => void
    SetUsers: (users: Array<UserType>) => void
    pageSize: number
    totalCount: number
    currentPage: number
    ChangeCurrentPage: (newPage: number) => void
    SetTotalCount: (TotalCount: number) => void
    isFetching: boolean
    ToggleIsFetching: (isPreloader: boolean) => void
}
//--------------------------------------------------------------------
class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.ChangeCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(response.data.items)
                this.props.SetTotalCount(response.data.totalCount)
            })
    }

    render() {
        return <div>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                      Follow={this.props.Follow}
                      Unfollow={this.props.Unfollow}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
        </div>
                      }
}
//--------------------------------------------------------------------
let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        ChangeCurrentPage: (newPage: number) => {
            dispatch(ChangeCurrentPageAC(newPage))
        },
        SetTotalCount: (TotalCount: number) => {
            dispatch(SetTotalCountAC(TotalCount))
        },
        ToggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer;

