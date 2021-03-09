import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType, RootStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type DPropsType = {
    addMessage: (text: string) => void
    onMessageChange: (newText: string) => void
    dialogsPage: dialogsPageType
    isAuth: boolean
}


const Dialogs = (props: DPropsType) => {

    let addMessage = () => {
        props.addMessage(props.dialogsPage.newMessageText)
        //props.dispatch(AddMessageActionCreator(props.dialogsPage.newMessageText))
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
        //props.dispatch(UpdateNewMessageTextActionCreator(e.currentTarget.value))
    }

    let DialogsDataElement = props.dialogsPage.dialogs.map(dialog => <DialogItem photo={dialog.photo}
                                                                                 name={dialog.name}
                                                                                 id={dialog.id}/>)

    let MessagesDataElement = props.dialogsPage.messages.map(message => <Message id={message.id}
                                                                                 message={message.message}/>)

    let UncheckedDialogsDataElement = props.dialogsPage.uncheckedDialogs.map(dialog => <DialogItem
        photo={dialog.photo} name={dialog.name} id={dialog.id}/>)

    let UncheckedMessagesDataElement = props.dialogsPage.uncheckedMessages.map(message => <Message id={message.id}
                                                                                                   message={message.message}/>)

    if (!props.isAuth) return <Redirect to={"/loginPage"}/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_wrap}>
                <div className={styles.dialogsItems}>
                    {DialogsDataElement}
                </div>
                <div className={styles.messages}>
                    {MessagesDataElement}
                </div>
            </div>
            <div className={styles.ancheckedDialogs_wrap}>
                <div>
                    {UncheckedDialogsDataElement}
                </div>
                <div className={styles.messages}>
                    {UncheckedMessagesDataElement}
                </div>
            </div>
            <div>
                <p className={styles.dialogs_title}>Messages</p>
                <div className={styles.dialogsTextfield_wrap}>
                <textarea
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange}/>
                    <div className={styles.dialogsTextfieldButtons_wrap}>
                        <button onClick={addMessage}>Add Post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
