import React from 'react';
import {ReduxStoreType} from "../../redux/store";
import Navbar from "./Navbar";

type SitebarContainerTypes = {
    store: ReduxStoreType
}

function NavbarContainer(props: SitebarContainerTypes) {

    let state = props.store.getState()

    return (<div>
            <Navbar state={state}/>
        </div>
    );
}


export default NavbarContainer;
