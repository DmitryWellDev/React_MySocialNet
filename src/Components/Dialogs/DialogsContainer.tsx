import React from 'react';
import {RootStateType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from '../../redux/Dialogs-Reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component<any, any> {

    componentDidMount() {
    }

    render() {

        return (
            <Dialogs
                {...this.props}
                addMessage={this.props.addMessage}
                onMessageChange={this.props.onMessageChange}
                dialogsPage={this.props.dialogsPage}
            />
        )
    }
}

//------------------------------------------------------------------
let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (text: string) => {
            dispatch(AddMessageActionCreator(text))
        },
        onMessageChange: (newText: string) => {
            dispatch(UpdateNewMessageTextActionCreator(newText))
        }
    }
}
//------------------------------------------------------------------

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)

