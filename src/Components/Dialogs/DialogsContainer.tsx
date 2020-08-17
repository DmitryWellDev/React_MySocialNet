import React from 'react';
import {ReduxStoreType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../redux/Dialogs-Reducer'
import Dialogs from "./Dialogs";

type DPropsType = {
    store: ReduxStoreType
}

const DialogsContainer = (props: DPropsType) => {

    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreator(props.store.getState().dialogsPage.newMessageText))
    }

    let onMessageChange = (newText: string) => {
        props.store.dispatch(UpdateNewMessageTextActionCreator(newText))
    }

    return (
        <div>
            <Dialogs addMessage={addMessage}
                     onMessageChange={onMessageChange}
                     state={state}/>
        </div>
    );
}


export default DialogsContainer;
