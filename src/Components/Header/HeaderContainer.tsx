import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {authInitialStateType, setUserAuth} from "../../redux/AuthReducer";
import {RootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    setUserAuth: (responceResult: string) => void
    userId: number | null
    email: string | null
    login: string | null
}

type ResponceDataType = {
    data: DataType
    fieldsErrors: []
    messages: []
    resultCode: number
}

type DataType = {
    id: number
    login: string
    email: string
}

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((res: any) => {
                if (res.data.resultCode === 0) {
                   let {email, id, login} = res.data.data
                    this.props.setUserAuth(email, id, login)
                }
            })
    }

    render() {
        return <Header login={this.props.login}
                       isFatch={this.props.isFatch}/>
    }
}

//------------------------------------------------------------------

const mapStateToProps = (state: RootStateType) => {
    return {
        login: state.auth.login,
        isFatch: state.auth.isFatch
    }
}

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer)