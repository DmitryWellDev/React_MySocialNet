import React, {Dispatch} from 'react';
import {ReduxStoreType, RootStateType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../redux/Dialogs-Reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isFatch
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        addMessage: (text: string) => {
            dispatch(AddMessageActionCreator(text))
        },
        onMessageChange: (newText: string) => {
            dispatch(UpdateNewMessageTextActionCreator(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


 export default DialogsContainer;
