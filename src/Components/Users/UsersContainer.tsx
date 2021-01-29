import React from 'react';
import {connect} from "react-redux";
import {
    ChangeCurrentPage,
    Follow,
    SetTotalCount,
    SetUsers, ToggleIsFetching,
    Unfollow,
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
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



const UsersContainer = connect(mapStateToProps,
    {Follow, Unfollow, SetUsers, ChangeCurrentPage, SetTotalCount, ToggleIsFetching})
(UsersContainerAPI)

export default UsersContainer;

