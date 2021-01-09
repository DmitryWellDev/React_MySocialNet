import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setDescription, SetProfile, setUserName} from "../../redux/Profile-Reducer";
import {withRouter} from 'react-router-dom';

//-------------------------------------------------------------
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then((response: any) => {
                console.log(response.data)
                this.props.SetProfile(response.data)
                this.props.setUserName(response.data.fullName)
                this.props.setDescription(response.data.aboutMe)
            })
    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile}
                     userName={this.props.userName}
                     description={this.props.description}/>
        )
    }
}

//-------------------------------------------------------------

let mapStateToProps = (state: any) => {

    return {
        profile: state.profilePage.profile,
        userName: state.profilePage.userName,
        description: state.profilePage.description
    }
}

let urlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetProfile, setUserName, setDescription})(urlData)


