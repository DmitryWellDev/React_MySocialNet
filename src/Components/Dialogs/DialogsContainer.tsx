import React, {Dispatch} from 'react';
import {ReduxStoreType, RootStateType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../redux/Dialogs-Reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// type DPropsType = {
//     store: ReduxStoreType
// }

// type dispatchType = {
//     dispatch: (AddMessageActionCreator:ActionsTypes) => void
// }

// const DialogsContainer = (props: DPropsType) => {
//
//     let state = props.store.getState()
//
//     let addMessage = () => {
//         props.store.dispatch(AddMessageActionCreator(props.store.getState().dialogsPage.newMessageText))
//     }
//
//     let onMessageChange = (newText: string) => {
//         props.store.dispatch(UpdateNewMessageTextActionCreator(newText))
//     }
//
//     return (
//         <div>
//             <Aside addMessage={addMessage}
//                      onMessageChange={onMessageChange}
//                      state={state}/>
//         </div>
//     );
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
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
