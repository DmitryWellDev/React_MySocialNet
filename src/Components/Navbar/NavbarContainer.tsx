import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withSitebar} from "../../hoc/withSitebar";


let mapDispatchToProps = (dispatch:Dispatch) => {
    return {

        }
    }

let ComponentWithSitebar = withSitebar(Navbar)

const NavbarContainer = connect(mapDispatchToProps)(ComponentWithSitebar)

export default NavbarContainer;
