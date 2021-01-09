import React from 'react';
import {RootStateType} from "../../redux/store";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type SitebarContainerTypes = {
//     store: ReduxStoreType
// }

// function NavbarContainer(props: SitebarContainerTypes) {
//
//     let state = props.store.getState()
//
//     return (<div>
//             <Navbar state={state}/>
//         </div>
//     );
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        sitebar: state.sitebar
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {

        }
    }

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;
