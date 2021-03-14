import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isFatch
    }
}

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/loginPage"}/>
            return <Component {...this.props}/>;
        }
    }
    let componentWithRedirect = connect(mapStateToProps)(RedirectComponent)

    return componentWithRedirect
}