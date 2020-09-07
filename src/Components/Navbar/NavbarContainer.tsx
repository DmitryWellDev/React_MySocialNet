import React from 'react';
import {ReduxStoreType, RootStateType} from "../../redux/store";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../redux/Profile-Reducer";

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
