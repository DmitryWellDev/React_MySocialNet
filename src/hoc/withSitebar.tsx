import React from 'react'
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        sitebar: state.sitebar
    }
}

export const withSitebar = (Component: any) => {
    class ComponentWithSitebar extends React.Component<any, any> {

        render() {
            return <Component {...this.props}/>;
        }
    }
    let componentWithSitebar = connect(mapStateToProps)(ComponentWithSitebar)

    return componentWithSitebar
}