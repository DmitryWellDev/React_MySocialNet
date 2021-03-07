import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {SetUserAuthTC} from "../../redux/AuthReducer";
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
        this.props.SetUserAuthTC()
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

export default connect(mapStateToProps, {SetUserAuthTC})(HeaderContainer)