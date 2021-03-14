import React from 'react';
import Aside from "./Aside";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withSitebar} from "../../hoc/withSitebar";


let mapDispatchToProps = (dispatch:Dispatch) => {
    return {

    }
}

let ComponentWithSitebar = withSitebar(Aside)

const AsideContainer = connect(mapDispatchToProps)(ComponentWithSitebar)

 export default AsideContainer;
