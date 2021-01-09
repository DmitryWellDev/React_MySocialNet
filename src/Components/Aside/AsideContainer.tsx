import React from 'react';
import {RootStateType} from "../../redux/store";
import Aside from "./Aside";
import {connect} from "react-redux";
import {Dispatch} from "redux";



let mapStateToProps = (state: RootStateType) => {
    return {
        sitebar: state.sitebar
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {

    }
}

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside)


 export default AsideContainer;
