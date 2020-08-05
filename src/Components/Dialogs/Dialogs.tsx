import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, dialogsPageType, store} from "../../redux/state";

type DPropsType = {
    dialogsPage: dialogsPageType
    // addMessage: (w: string) => void
    // updateNewMessageText: (newText: string) => void
    newPostMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const   Dialogs = (props: DPropsType) => {

    let addMessage = () => {
        //props.addMessage(props.dialogsPage.newMessageText)
        props.dispatch({ type: 'ADD-MESSAGE', w: props.dialogsPage.newMessageText })
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            //props.updateNewMessageText( e.currentTarget.value)
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: e.currentTarget.value })
    }

    let  DialogsDataElement = props.dialogsPage.dialogs.map(dialog => <DialogItem photo={dialog.photo} name={dialog.name} id={dialog.id}/>)

    let MessagesDataElement = props.dialogsPage.messages.map(message => <Message id={message.id} message={message.message} />)

    let  UncheckedDialogsDataElement = props.dialogsPage.uncheckedDialogs.map(dialog => <DialogItem photo={dialog.photo} name={dialog.name} id={dialog.id}/>)

    let UncheckedMessagesDataElement = props.dialogsPage.uncheckedMessages.map(message => <Message id={message.id} message={message.message} />)
    return (
        <div className={styles.dialogs}>
          <div className={styles.dialogsItems}>
              {DialogsDataElement}
          </div>
            <div className={styles.messages}>
                {MessagesDataElement}
            </div>
            <div>
                {UncheckedDialogsDataElement}
            </div>
            <div>
                {UncheckedMessagesDataElement}
            </div>
            <div>
                <textarea
                          value={props.dialogsPage.newMessageText}
                onChange={onMessageChange}/>
                <button onClick={addMessage}>Add Post</button>
            </div>
        </div>
    );
}


export default Dialogs;
