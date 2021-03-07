import React from 'react';
import {connect} from "react-redux";
import {
    GetUserPageTC,
    SetUsersTC,
    UserType
} from "../../redux/Users-Reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    SetUsersTC: (currentPage: number, pageSize: number) => void
    GetUserPageTC: (pageNumber: number, pageSize: number) => void
}

//--------------------------------------------------------------------
class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.SetUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.GetUserPageTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}/>
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const UsersContainer = connect(mapStateToProps,
    {SetUsersTC, GetUserPageTC})
(UsersContainerAPI)

export default UsersContainer;

