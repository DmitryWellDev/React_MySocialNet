import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setDescription, SetProfile, setUserName} from "../../redux/Profile-Reducer";
import {withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


//-------------------------------------------------------------
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId ===undefined) {
            userId = 11659
        }
        usersAPI.getUserProfile(userId)
            .then((response: any) => {
                this.props.SetProfile(response.data)
                this.props.setUserName(response.data.fullName)
                this.props.setDescription(response.data.aboutMe)
            })
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     userName={this.props.userName}
                     description={this.props.description}
                     status={this.props.status}
            />
        )
    }
}

//-------------------------------------------------------------

let mapStateToProps = (state: any) => {

    return {
        profile: state.profilePage.profile,
        userName: state.profilePage.userName,
        description: state.profilePage.description,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {SetProfile, setUserName, setDescription}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

